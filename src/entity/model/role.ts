export const name = 'role'
export const rule: TableRule = {
  name: { type: 'string', required: true, only: true, max: 50, like: true },
  rule_ids: { type: 'array', default: [] }
}
