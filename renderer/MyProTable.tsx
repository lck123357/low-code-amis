import { Renderer } from 'amis'
import React from 'react'
import { RendererProps } from 'amis/lib/factory'
import ProTable from '@ant-design/pro-table'
import axios from 'axios'

export interface myProTableProps extends RendererProps {
  columns: Array<Object>,
  url: String,
  method: String
}

@Renderer({
  test: /\bmy-proTable$/,
  name: 'my-proTable'
})

export default class MyProTable extends React.Component<myProTableProps> {
  static defaultProps = {
    columns: [],
    method: 'get'
  }

  constructor(props: any) {
    super(props)
    this.state = {}
  }

  render() {
    const { columns, url, method } = this.props
    
    return (
      <>
        <ProTable
          columns={columns}
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
