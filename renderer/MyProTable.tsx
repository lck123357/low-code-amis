import { Renderer } from 'amis'
import React from 'react'
import { RendererProps } from 'amis/lib/factory'
import ProTable from '@ant-design/pro-table'
import { Button } from 'antd'
import axios from 'axios'

export interface myProTableProps extends RendererProps {
  columns: Array<Object>,
  url: String,
  method: String,
  actions: Array<Object>
}

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
    this.state = {}
  }

  render() {
    const { columns, url, method, actions, env } = this.props
    
    return (
      <>
        <ProTable
          columns={actions.length !== 0 ? [...columns, {
            title: '操作',
            search: false,
            render: () => [
              ...actions.map((item) => {
                return (
                  <Button type={item.type} {...item}>{item.title}</Button>
                )
              }),
              <Button danger>删除</Button>
            ]
          }] : columns}
          request={async (params = {}, sorter, filter) => {
            const msg = await axios[method](url, params)

            return {
              data: msg.data.data.list,
              success: true,
              total: 12
            }
          }}
        />
      </>
    )
  }
}
