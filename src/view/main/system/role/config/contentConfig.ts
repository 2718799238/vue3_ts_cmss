export const contentConfig = {
  pageName: 'role',
  title: '角色列表',
  newPage: '新添角色',
  formList: [
    {
      type: 'default',
      label: '角色名称',
      prop: 'name',
      initialValue: 'aaa'
    },
    {
      type: 'default',
      label: '角色权限',
      prop: 'intro',
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
      label: '更新时间',
      prop: 'updateAt',
      initialValue: ''
    }
  ]
}
