export const name = 'folder'

export const rule: TableRule = {
  name: { type: 'string', required: true, only: true, max: 50, like: true },
  file: { type: 'string', max: 50 },
  custom_name: { type: 'string', required: true, only: true, max: 50, like: true },

  folder_category_id: { type: 'string', required: true, max: 36, min: 36 }
}
