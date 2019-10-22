export const name = 'custom'
export const rule: TableRule = {
  name: { type: 'string', required: true, only: true, max: 50, like: true },
  template: { type: 'string', max: 5000 }
}
