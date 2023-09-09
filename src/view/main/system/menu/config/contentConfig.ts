export const contentConfig = {
  pageName: 'menu',
  title: '菜单列表',
  newPage: '新建菜单',
  formList: [
    { type: 'default', prop: 'name', label: '菜单名称', size: 120 },
    { type: 'default', prop: 'type', label: '级别', size: 50 },
    { type: 'default', prop: 'url', label: '菜单url', size: 150 },
    { type: 'default', prop: 'icon', label: '菜单icon', size: 150 },
    { type: 'default', prop: 'sort', label: '排序' },
    { type: 'default', prop: 'permission', label: '权限', size: 160 },
    { type: 'time', prop: 'createAt', label: '创建时间', size: 250 },
    { type: 'default', prop: 'updateAt', label: '更新时间', size: 250 },
    { type: 'buttom', label: '操作' }
  ]
}
