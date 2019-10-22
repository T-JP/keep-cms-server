export const name = 'rule'
export const rule: TableRule = {
  name: { type: 'string', required: true, only: true, max: 50, like: true },
  key: { type: 'string', required: true, max: 50, like: true }
}
