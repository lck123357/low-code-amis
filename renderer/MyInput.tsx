import {Renderer} from 'amis';
import { RendererProps } from 'amis/lib/factory';
import React, { useState } from 'react';
// import { Input, Button } from 'antd'
import { NumberInput, Button } from 'amis/lib/components/index'

export interface myInputProps extends RendererProps {
  target?: string;
}

@Renderer({
  test: /\bmy-input$/,
  name: 'my-input'
})

// 现在来看只能支持class 写法
export default class myInput extends React.Component<myInputProps> {
  static defaultProps = {
    target: 'world'
  }       

  render() {
    const {
      target
    } = this.props;

    return (
      // <p>Hello lck {target}!</p>
      <>
        <Button onClick={() => alert(22222)}>{target}22111</Button>
      </>
    );
  }
}
