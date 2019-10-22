import path = require('path')

export const service = {
  dir: path.join(__dirname, '../../public')
}
export const serve = {
  root: path.join(__dirname, '../../public'),
  opts: {
    // defer: true
  }
}
export const log = {
  dir: path.join(__dirname, '../../temp'),
  type: '',
  print: true,
  output: true
}
export const mongo = {
  user: 'cms',
  pwd: 'cms123456',
  host: '106.15.235.48',
  port: '27017',
  db: 'cms'
}
export const local = {
  user: 'cmsadmin',
  pwd: 'cmsadmin123456',
  host: 'localhost',
  port: '27017',
  db: 'cms'
}
export const http = {
  host: 'localhost',
  // host: '192.168.91.107',
  // host: '106.15.235.48',
  port: 8888,
  // host: '172.19.179.75',
  // port: 80,
  exclusive: true
}
