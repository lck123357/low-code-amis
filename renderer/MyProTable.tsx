import { Renderer } from 'amis'
import React from 'react'
import { RendererProps } from 'amis/lib/factory'
import ProTable from '@ant-design/pro-table'


export interface myProTableProps extends RendererProps {
  columns: Array<Object>,
  url: String
}

@Renderer({
  test: /\bmy-proTable$/,
  name: 'my-proTable'
})

export default class MyProTable extends React.Component<myProTableProps> {
  static defaultProps = {
    columns: []
  }

  constructor(props: any) {
    super(props)
    this.state = {}
  }

  render() {
    const { columns, url } = this.props
    
    return (
      <>
        <ProTable
          columns={columns}
          // request={(params = {}, sorter, filter) => {
          //   return url
          // }}
        />
      </>
    )
  }
}
