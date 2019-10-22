export const name = 'content'
export const rule: TableRule = {
  name: { type: 'string', required: true, max: 50, like: true },
  custom_name: { type: 'string', required: true, only: true, max: 50, like: true },

  page_id: { type: 'string', required: true, max: 36, min: 36 },
  content_category_id: { type: 'string', required: true, max: 36, min: 36 },

  title: { type: 'string', max: 50 },
  brief: { type: 'string', max: 500 },
  picture: { type: 'string', max: 500 },
  text: { type: 'string', max: 5000 },
  author: { type: 'string', max: 50 },
  views: { type: 'number', max: 20 },
  remark: { type: 'string', max: 1000 },
  sort: { type: 'number', max: 20 }
}
