export const name = 'user'
export const rule: TableRule = {
  account: { type: 'string', required: true, only: true, max: 50 },
  password: { type: 'string', required: true, max: 50 },
  name: { type: 'string', required: true, only: true, max: 50 },
  role_id: { type: 'string', required: true, max: 36, min: 36 }
}
