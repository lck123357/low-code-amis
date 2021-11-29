import {BasePlugin, registerEditorPlugin} from 'amis-editor';

export class MyProTable extends BasePlugin {
    rendererName = 'my-proTable';

    $schema = '/schemas/UnkownSchema.json';

    name = '通用proTable表格';
    description = '适用于管理页面的列表页面开发';

    tags = ['自定义'];

    icon = 'fa fa-window-maximize';

    // 传入预览图的数据
    previewSchema = {
        type: 'my-proTable'
        // target: ''
    };

    // 拖入组件时传入的初始化数据
    scaffold = {
        type: 'my-proTable'
    };

    // 右侧面板配置
    // panelTitle = ''
    panelControls = [
        {
            type: 'tabs',
            tabs: [
                {
                    title: '列表字段配置',
                    controls: [
                      {
                        type: 'input-table',
                        name: 'columns',
                        addable: true,
                        editable: true,
                        columns: [
                          {
                            label: '字段参数',
                            name: 'dataIndex'
                          },
                          {
                            label: '字段名',
                            name: 'title'
                          },
                          {
                            label: '是否搜索',
                            name: 'search',
                            type: 'select',
                            options: [
                              {
                                label: '是',
                                value: true
                              },
                              {
                                label: '否',
                                value: false
                              }
                            ]
                          }
                        ]
                      }
                    ]
                },
                {
                    title: '数据源',
                    controls: [
                        {
                          name: 'url',
                          label: '接口',
                          type: 'text'
                        },
                        {

                        }
                    ]
                }
            ]
        }
    ];
}

registerEditorPlugin(MyProTable);
