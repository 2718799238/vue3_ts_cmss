export const contentConfig = {
  pageName: 'menu',
  title: '菜单列表',
  newPage: '新建菜单',
  formList: [
    { type: 'default', prop: 'name', label: '菜单名称' },
    { type: 'default', prop: 'type', label: '级别' },
    { type: 'default', prop: 'url', label: '菜单url' },
    { type: 'default', prop: 'icon', label: '菜单icon' },
    { type: 'default', prop: 'sort', label: '排序' },
    { type: 'default', prop: 'permission', label: '权限' },
    { type: 'time', prop: 'createAt', label: '创建时间' },
    { type: 'default', prop: 'updateAt', label: '更新时间' },
    { type: 'buttom', label: '操作' }
  ]
}
