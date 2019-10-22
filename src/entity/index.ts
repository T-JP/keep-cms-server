import user = require('./model/user')
import role = require('./model/role')
import rule = require('./model/rule')
import menu = require('./model/menu')
import page = require('./model/page')
import content = require('./model/content')
import message = require('./model/message')
import custom = require('./model/custom')
import folder = require('./model/folder')
import pageCategory = require('./model/pageCategory')
import contentCategory = require('./model/contentCategory')
import messageCategory = require('./model/messageCategory')
import folderCategory = require('./model/folderCategory')

export = [
  user,
  role,
  rule,
  menu,
  page,
  content,
  message,
  custom,
  folder,
  pageCategory,
  contentCategory,
  messageCategory,
  folderCategory
]

// export const user = {
//   account: { type: 'string', required: true, only: true, max: 50 },
//   password: { type: 'string', required: true, max: 50 },
//   name: { type: 'string', required: true, only: true, max: 50 },
//   role_id: { type: 'string', required: true, max: 36, min: 36 }
// }
// export const role = {
//   name: { type: 'string', required: true, only: true, max: 50 },
//   rule_ids: { type: 'array', default: [] }
// }
// export const rule = {
//   name: { type: 'string', required: true, only: true, max: 50 },
//   key: { type: 'string', required: true, max: 50 }
// }

// export const menu = {
//   name: { type: 'string', required: true, only: true, max: 50 },
//   route: { type: 'string', required: true, max: 50 },

//   parent_id: { type: 'string', max: 36, min: 36 },
//   rule_id: { type: 'string', max: 36, min: 36 }
// }

// export const page = {
//   name: { type: 'string', required: true, only: true, max: 50 },

//   file: { type: 'string', required: true, only: true, max: 500 },

//   template: { type: 'string', max: 50000 },

//   custom_name: { type: 'string', required: true, only: true, max: 50 }
// }
// export const content = {
//   name: { type: 'string', required: true, max: 50 },
//   custom_name: { type: 'string', required: true, only: true, max: 50 },

//   page_id: { type: 'string', required: true, max: 36, min: 36 },
//   content_category_id: { type: 'string', required: true, max: 36, min: 36 },

//   title: { type: 'string', max: 50 },
//   brief: { type: 'string', max: 500 },
//   picture: { type: 'string', max: 500 },
//   text: { type: 'string', max: 5000 },
//   author: { type: 'string', max: 50 },
//   views: { type: 'number', max: 20 },
//   remark: { type: 'string', max: 1000 },
//   sort: { type: 'number', max: 20 }
// }

// export const message = {
//   name: { type: 'string', max: 50 },

//   title: { type: 'string', max: 50 },
//   brief: { type: 'string', max: 500 },
//   remark: { type: 'string', max: 1000 },

//   message_category_id: { type: 'string', required: true, max: 36, min: 36 }
// }

// export const custom = {
//   name: { type: 'string', required: true, only: true, max: 50 },
//   template: { type: 'string', max: 5000 }
// }

// export const folder = {
//   name: { type: 'string', required: true, only: true, max: 50 },
//   file: { type: 'string', max: 50 },
//   custom_name: { type: 'string', required: true, only: true, max: 50 },

//   folder_category_id: { type: 'string', required: true, max: 36, min: 36 }
// }

// export const pageCategory = {
//   name: { type: 'string', required: true, only: true, max: 50 }
// }
// export const contentCategory = {
//   name: { type: 'string', required: true, only: true, max: 50 },
//   custom_name: { type: 'string', required: true, only: true, max: 50 },

//   page_id: { type: 'string', max: 36, min: 36 }
// }
// export const messageCategory = {
//   name: { type: 'string', required: true, only: true, max: 50 }
// }
// export const folderCategory = {
//   name: { type: 'string', required: true, only: true, max: 50 }
// }
