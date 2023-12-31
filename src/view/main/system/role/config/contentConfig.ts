export const contentConfig = {
  pageName: 'role',
  title: '角色列表',
  newPage: '新添角色',
  formList: [
    {
      type: 'selection',
      label: '选择',
      size: 40
    },
    {
      type: 'index',
      label: '序号',
      size: 60
    },
    {
      type: 'default',
      label: '角色名称',
      prop: 'name',
      initialValue: 'aaa',
      size: 150
    },
    {
      type: 'default',
      label: '角色权限',
      prop: 'intro',
      initialValue: 'aaa',
      size: 150
    },

    {
      type: 'time',
      label: '创建时间',
      prop: 'createAt',
      initialValue: '',
      size: 300
    },
    {
      type: 'time',
      label: '更新时间',
      prop: 'updateAt',
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
