export const contentConfig = {
  pageName: 'story',
  title: '故事列表',
  formList: [
    {
      type: 'selection',
      label: '选择',
      size: 80
    },
    {
      type: 'index',
      label: '序号',
      size: 80
    },
    {
      type: 'default',
      label: '故事标题',
      prop: 'title',
      initialValue: 'aaa',
      size: 250
    },
    {
      type: 'default',
      label: '我的故事',
      prop: 'content',
      initialValue: 'aaa',
      size: 500
    },

    {
      type: 'time',
      label: '创建时间',
      prop: 'createAt',
      initialValue: '',
      size: 300
    },
    {
      type: 'buttom',
      label: '操作',
      size: 200
    }
  ]
}
