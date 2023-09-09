export const contentConfig = {
  pageName: 'category',
  title: '商品列表',
  newPage: '新建商品',
  formList: [
    {
      type: 'selection',
      label: '选择',
      size: 40
    },
    {
      type: 'index',
      label: '序号',
      size: 80
    },
    {
      type: 'default',
      label: '类别名称',
      prop: 'name',
      initialValue: 'aaa',
      size: 200
    },

    {
      type: 'time',
      label: '创建时间',
      prop: 'createAt',
      initialValue: '',
      size: 350
    },
    {
      type: 'time',
      label: '更新时间',
      prop: 'updateAt',
      initialValue: '',
      size: 350
    },
    {
      type: 'buttom',
      label: '操作',
      size: 200
    }
  ]
}
