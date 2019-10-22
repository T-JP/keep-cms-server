export const name = 'message'
export const rule: TableRule = {
  name: { type: 'string', max: 50, like: true },

  title: { type: 'string', max: 50, like: true },
  brief: { type: 'string', max: 500 },
  remark: { type: 'string', max: 1000 },

  message_category_id: { type: 'string', required: true, max: 36, min: 36 }
}
