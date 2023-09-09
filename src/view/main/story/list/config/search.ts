export const searchConfig = {
  pageName: 'story',
  formItem: [
    {
      label: '故事标题',
      prop: 'title',
      type: 'input',
      placeholder: '请输入故事标题'
    },
    {
      label: '故事内容',
      prop: 'intro',
      type: 'input',
      placeholder: '请输入故事内容'
    },
    {
      label: '创建时间',
      prop: 'createAt',
      type: 'date-picker'
    }
  ]
}
