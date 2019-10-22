import uuid = require('./uuid')
//返回时间戳
export const date = (): {
  Y: number
  M: number
  D: number
  h: number
  m: number
  s: number
  time: number
} => {
  const date = new Date(),
    Y = date.getFullYear(),
    M = date.getMonth() + 1,
    D = date.getDate(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    time = date.getTime()
  return { Y, M, D, h, m, s, time }
}
export { uuid }
const hasOwnProperty = Object.prototype.hasOwnProperty

// export { uuid }

/**
 * Checks `value` is an empty object,array.
 *
 * Return `true` is empty
 *
 */
export const isEmpty = (val: {} | []): boolean => {
  if (Array.isArray(val)) {
    return !val.length
  }
  for (const key in val) {
    if (hasOwnProperty.call(val, key)) {
      return false
    }
  }
  return true
}
/**
 * @param data 需要检查的数据
 * @param rules 根据此规则检查
 * @returns `{ status, data, error }`
 *
 * `status:0`检查通过,`data属性`为过 滤后数据.
 *
 * `status:1`检查不通过,`error属性`为反馈信息.
 */
export const check = (data: ObjectAny, rules: TableRule): ObjectAny => {
  const result: ObjectAny = {},
    error: string[] = [],
    onlys: string[] = []
  for (const key in rules) {
    const val = (result[key] = data[key]),
      { type, required, default: value, max, min, only } = rules[key],
      _max = max || 50,
      _min = min || 1

    if (val) {
      const length = val.toString().length

      if (type === 'array') {
        Array.isArray(val) || error.push(`field '${key}' must be a '${type}'`)
      } else if (typeof val !== type) {
        error.push(`field '${key}' must be a '${type}'`)
      }

      if (length > _max) {
        error.push(`field '${key}' max length is '${_max}'`)
      }
      if (required && length < _min) {
        error.push(`field '${key}' min length is '${_max}'`)
      }
    } else {
      if (required) {
        error.push(`${key} is required`)
      } else {
        result[key] = value as string | number
      }
    }
    only && onlys.push(key)
  }
  return { error, result, onlys }
}
export const checkQuery = (data: ObjectAny, rules: TableRule): ObjectAny => {
  const result: ObjectAny = {},
    error: string[] = []
  for (const key in rules) {
    if (typeof data[key] === 'undefined') continue
    const val = data[key],
      length = val.toString().length,
      { type, max, like } = rules[key],
      _max = max || 50
    // if (isLike) {
    //   result[key] = new RegExp(data[key])
    // } else {
    //   result[key] = data[key]
    // }
    result[key] = like ? new RegExp(data[key]) : data[key]
    if (type === 'array') {
      Array.isArray(val) || error.push(`field '${key}' must be a '${type}'`)
    } else if (typeof val !== type) {
      error.push(`field '${key}' must be a '${type}'`)
    }
    if (length > _max) {
      error.push(`field '${key}' max length is '${_max}'`)
    }
  }
  console.log(result)
  for (const key in data) {
    if (key in rules) continue
    result[key] = data[key]
  }
  return { error, result }
}
