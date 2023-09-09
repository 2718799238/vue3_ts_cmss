export const searchConfig = {
  pageName: 'goods',
  formItem: [
    {
      label: '商品名称',
      prop: 'name',
      type: 'input',
      placeholder: '请输入商品名称'
    },
    {
      label: '商品地址',
      prop: 'address',
      type: 'input',
      placeholder: '请输入商品地址'
    },
    {
      label: '状态',
      prop: 'status',
      type: 'input',
      placeholder: '请输入角色权限'
    },
    {
      label: '创建时间',
      prop: 'createAt',
      type: 'date-picker'
    }
  ]
}
