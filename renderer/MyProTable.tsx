import { Renderer } from 'amis'
import React, { createRef } from 'react'
import { RendererProps } from 'amis/lib/factory'
import ProTable from '@ant-design/pro-table'
import { Button, FormInstance, Popconfirm } from 'antd'
import axios from 'axios'
import CommonModal from './_components/Modal'

export interface myProTableProps extends RendererProps {
  columns: Object[],
  url: string,
  'deleteUrl': string,
  'deleteMethod': string,
  method: string,
  actions: Array<Object>,
  isEdit: Boolean,
  isShow: Boolean,
  isDelete: Boolean
}

const myRef = createRef<FormInstance>() as MutableRefObject<FormInstance>

@Renderer({
  test: /\bmy-proTable$/,
  name: 'my-proTable'
})

export default class MyProTable extends React.Component<myProTableProps> {
  static defaultProps = {
    columns: [],
    method: 'get',
    actions: []
  }

  constructor(props: any) {
    super(props)
    this.state = {
      visible: false,
      info: {}
    }
  }

  render() {
    const {
      columns,
      url,
      method,
      actions,
      env,
      deleteUrl,
      deleteMethod,
      isEdit,
      isShow,
      isDelete
    } = this.props

    return (
      <>
        <ProTable
          actionRef={myRef}
          columns={(actions.length !== 0 || !!isEdit || !!isShow || !!isDelete) ? [...columns, {
            title: '操作',
            valueType: 'option',
            // search: false,
            render: (_, record) => [
              ...actions.map((item) => {
                return (
                  <Button type={item.type} {...item}>{item.title}</Button>
                )
              }),
              <>{
                !!isShow && 
                <Button>查看</Button>
              }</>,
              <>{
                !!isEdit &&
                <Button type='primary' onClick={() => this.setState({ visible: true, info: record })}>编辑</Button>
              }</>,
              <>{
                !!isDelete &&
                <Popconfirm title='确认是否删除' onConfirm={() => {
                  env.fetcher(deleteUrl, {
                    id: record.id
                  }).then(() => {
                    console.log('成功')
                    myRef.current.reload()
                  })
                }}>
                  <Button danger>删除</Button>
                </Popconfirm>
              }</>
            ]
          }] : columns}
          request={async (params = {}, sorter, filter) => {
            const msg = await env.fetcher(url, params)

            return {
              data: msg.data.list,
              success: true,
              total: msg.data.total
            }
          }}
        />
        <CommonModal
          visible={this.state.visible}
          onCancel={() => this.setState({ visible: false, info: {} })}
          info={this.state.info}
          FormItems={columns.filter(({ isEditShow = false }) => !!isEditShow)}
        />
      </>
    )
  }
}
