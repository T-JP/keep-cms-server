export const name = 'contentCategory'

export const rule: TableRule = {
  name: { type: 'string', required: true, only: true, max: 50, like: true },
  custom_name: { type: 'string', required: true, only: true, max: 50, like: true },

  page_id: { type: 'string', max: 36, min: 36 }
}
