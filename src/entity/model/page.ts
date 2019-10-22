export const name = 'page'
export const rule: TableRule = {
  name: { type: 'string', required: true, only: true, max: 50, like: true },

  file: { type: 'string', required: true, only: true, max: 500 },

  template: { type: 'string', max: 50000 },

  custom_name: { type: 'string', required: true, only: true, max: 50, like: true }
}
