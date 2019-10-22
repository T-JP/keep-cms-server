interface MongoConf {
  user: string
  pwd: string
  host: string
  port: string
  db: string
}
interface LogOption {
  name: string
  type?: string
  print?: boolean
  output?: boolean
}
interface LogErrorOption {
  message?: string
  name?: string
  stack?: string
  ip?: string
  status?: string
  method?: string
  url?: string
}
interface ObjectAny {
  [key: string]: any
}
interface TableRule {
  [key: string]: CheckOption
}
interface CheckOption {
  type: string
  only?: boolean
  required?: boolean
  default?: string | number | []
  max?: number
  min?: number
  like?: boolean
}

interface User {
  _id: string
  created_at: number
  modified_at: number

  account: string
  password: string
  name: string

  role_id: string
}
interface Role {
  _id: string
  created_at: number
  modified_at: number

  name: string
  rule_ids: string[]
}
interface Rule {
  _id: string
  created_at: number
  modified_at: number

  name: string
  key: string
}
interface Menu {
  _id: string
  created_at: number
  modified_at: number

  name: string
  route: string

  parent_id: string
  rule_id: string
}
// page
interface Page {
  _id: string
  created_at: number
  modified_at: number
  generated_at: number

  name: string
  file: string
  template: string
  custom_name: string
  page_category_id: string
}
interface Content {
  _id: string
  created_at: number
  modified_at: number
  generated_at: number

  name: string
  custom_name: string

  page_id: string
  content_category_id: string

  title: string
  brief: string
  picture: string
  text: string
  author: string
  views: number
  remark: string
  sort: number
}
interface Message {
  _id: string
  created_at: number
  modified_at: number

  name: string

  title: string
  brief: string
  remark: string

  message_category_id: string
}
interface Custom {
  _id: string
  created_at: number
  modified_at: number

  name: string
  template: string
}
interface Folder {
  _id: string
  created_at: number
  modified_at: number

  name: string
  file: string
  custom_name: string

  folder_category_id: string
}

interface PageCategory {
  _id: string
  created_at: number
  modified_at: number

  name: string
}
interface ContentCategory {
  _id: string
  created_at: number
  modified_at: number

  name: string
  custom_name: string

  page_id: string
}
interface MessageCategory {
  _id: string
  created_at: number
  modified_at: number

  name: string
}
interface FolderCategory {
  _id: string
  created_at: number
  modified_at: number

  name: string
}
