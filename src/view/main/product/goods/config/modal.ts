export const modalConfig = {
  pageName: 'goods',
  newTitle: '新添商品',
  editTitle: '编辑商品',
  formList: [
    {
      type: 'input',
      label: '商品名称',
      prop: 'name',
      placeholder: '请输入商品名称'
    },
    {
      type: 'input',
      label: '原价格',
      prop: 'oldPrice'
    },
    {
      type: 'input',
      label: '新价格',
      prop: 'newPrice'
    },
    {
      ttype: 'input',
      label: '商品描述',
      prop: 'desc'
    },
    {
      type: 'input',
      label: '状态',
      prop: 'status'
    },
    {
      type: 'pic',
      label: '商品描述',
      prop: 'imgUrl'
    },
    {
      type: 'input',
      label: '库存',
      prop: 'inventoryCount'
    },
    {
      type: 'input',
      label: '销量',
      prop: 'saleCount'
    },
    {
      type: 'input',
      label: '收藏',
      prop: 'favorCount'
    },
    {
      type: 'default',
      label: '地址',
      prop: 'address',
      initialValue: 'aaa'
    },
    {
      type: 'date-picker',
      label: '创建时间',
      prop: 'createAt',
      initialValue: ''
    }
  ]
}
