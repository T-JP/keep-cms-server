export const name = 'menu'
export const rule: TableRule = {
  name: { type: 'string', required: true, only: true, max: 50, like: true },
  route: { type: 'string', required: true, max: 50, like: true },

  parent_id: { type: 'string', max: 36, min: 36 },
  rule_id: { type: 'string', max: 36, min: 36 }
}
