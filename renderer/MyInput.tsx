import {Renderer} from 'amis';
import { RendererProps } from 'amis/lib/factory';
import React, { useState } from 'react';
import { Input, Button } from 'antd'
// import { NumberInput, Button } from  'amis/lib/components/index'

export interface myInputProps extends RendererProps {
  target?: string;
  // size?: string;
  inputValue: number;
}

@Renderer({
  test: /\bmy-input$/,
  name: 'my-input'
})

// 现在来看只能支持class 写法
export default class myInput extends React.Component<myInputProps> {
  static defaultProps = {
    target: 'world',
    size: 'normal'
  }

  constructor(props: any) {
    super(props)
    this.state = {
      inputValue: 0
    }
  }

  render() {
    const {
      target,
      size
    } = this.props;

    const {
      inputValue
    } = this.state

    return (
      // <p>Hello lck {target}!</p>
      <>
        <Input onChange={(e) => this.setState({ inputValue: e.target.value })} />
        <Button
          onClick={() => alert(inputValue)} type='primary'
          size={size}
        >{target}</Button>
      </>
    );
  }
}
