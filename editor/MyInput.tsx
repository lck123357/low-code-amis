import { BasePlugin, registerEditorPlugin } from 'amis-editor';

export class MyRendererInput extends BasePlugin {
  rendererName = 'my-input';

  // 暂时只支持这个，配置后会开启代码编辑器
  $schema = '/schemas/UnkownSchema.json';

  // 用来配置名称和描述
  name = '自定义测试输入框';
  description = '这只是个lck示例';

  // tag，决定会在哪个 tab 下面显示的
  tags = ['自定义'];

  // 图标
  icon = 'fa fa-user';

  // 用来生成预览图的
  previewSchema = {
    type: 'my-input',
    target: '这是一个自定义输入工具'
  };

  // 拖入组件里面时的初始数据
  scaffold = {
    type: 'my-input',
    target: '自定义输入'
  };

  // 右侧面板相关
  panelTitle = '自定义输入';
  panelControls = [
    {
      type: 'tabs',
      tabsMode: 'line',
      className: 'm-t-n-xs',
      contentClassName: 'no-border p-l-none p-r-none',
      tabs: [
        {
          title: '样式',
          controls: [
            {
              name: 'size',
              label: '尺寸',
              type: 'text'
            }
          ]
        },

        {
          title: '动作',
          controls: []
        }
      ]
    }
  ];
}

registerEditorPlugin(MyRendererInput);
