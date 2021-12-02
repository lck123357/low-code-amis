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
                  title: '动作操作',
                  controls: [
                    {
                      name: 'isEdit',
                      label: '编辑',
                      type: 'checkbox',
                      option: '是否编辑'
                    },
                    {
                      name: 'isShow',
                      label: '查看',
                      type: 'checkbox',
                      option: '是否查看'
                    },
                    {
                      name: 'isDelete',
                      label: '查看',
                      type: 'checkbox',
                      option: '是否编辑'
                    },
                    {
                      type: 'input-table',
                      name: 'actions',
                      addable: true,
                      editable: true,
                      removable: true,
                      columns: [
                        {
                          label: '操作项',
                          name: 'title',
                          type: 'text'
                        },
                        {
                          label: '按钮样式',
                          name: 'type',
                          type: 'select',
                          options: ['primary', 'link', 'dashed']
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
                          label: '列表接口',
                          type: 'text'
                        },
                        // {
                        //   name: 'method',
                        //   label: '请求方式',
                        //   type: 'select',
                        //   options: ['get', 'post']
                        // },
                        {
                          name: 'deleteUrl',
                          label: '删除接口',
                          type: 'text'
                        },
                        // {
                        //   name: 'deleteMethod',
                        //   label: '删除请求方式',
                        //   type: 'select',
                        //   options: ['get', 'post']
                        // }
                    ]
                },
                {
                  title: '列表字段配置',
                  controls: [
                    {
                      type: 'input-table',
                      name: 'columns',
                      addable: true,
                      editable: true,
                      removable: true,
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
                        },
                        {
                          label: '渲染器',
                          name: 'valueType',
                          type: 'select',
                          options: ['date', 'dateRange', 'digit', 'input']
                        },
                        {
                          label: '在编辑中展示',
                          name: 'isEditShow',
                          type: 'checkbox'
                        }
                      ]
                    }
                  ]
              },
            ]
        }
    ];
}

registerEditorPlugin(MyProTable);
