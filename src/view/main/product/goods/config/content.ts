export const contentConfig = {
  pageName: 'goods',
  title: '商品列表',
  newPage: '新建商品',
  formList: [
    {
      type: 'selection',
      label: '选择'
    },
    {
      type: 'index',
      label: '序号'
    },
    {
      type: 'default',
      label: '商品名称',
      prop: 'name',
      initialValue: 'aaa'
    },
    {
      type: 'default',
      label: '原价格',
      prop: 'oldPrice',
      initialValue: 'aaa'
    },
    {
      type: 'default',
      label: '新价格',
      prop: 'newPrice',
      initialValue: 'aaa'
    },
    {
      type: 'default',
      label: '商品描述',
      prop: 'desc',
      initialValue: 'aaa'
    },
    {
      type: 'default',
      label: '状态',
      prop: 'status',
      initialValue: 'aaa'
    },
    {
      type: 'pic',
      label: '商品描述',
      prop: 'imgUrl',
      initialValue: 'aaa'
    },
    {
      type: 'default',
      label: '库存',
      prop: 'inventoryCount',
      initialValue: 'aaa'
    },
    {
      type: 'default',
      label: '销量',
      prop: 'saleCount',
      initialValue: '56'
    },
    {
      type: 'default',
      label: '收藏',
      prop: 'favorCount',
      initialValue: '10'
    },
    {
      type: 'default',
      label: '地址',
      prop: 'address',
      initialValue: 'aaa'
    },
    {
      type: 'time',
      label: '创建时间',
      prop: 'createAt',
      initialValue: ''
    },
    {
      type: 'time',
      label: '更新时间时间',
      prop: 'updateAt',
      initialValue: ''
    },
    {
      type: 'buttom',
      label: '操作'
    }
  ]
}
