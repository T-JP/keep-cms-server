import Util = require('util')
import Fs = require('fs')
import Path = require('path')
import conf = require('../config')
const { date } = require('../util')
const _log = console.log
export const logger = ({
  name,
  type = conf.log.type,
  print = conf.log.print,
  output = conf.log.output
}: LogOption): Function => {
  // typeof print === 'undefined' && (print = conf.log.print)
  // typeof output === 'undefined' && (output = conf.log.output)
  return (msg: string, ...args: (string | number | object)[]): void => {
    const { Y, M, D, h, m, s } = date()
    const vargs: string[] = []
    vargs.push(`[${name} log ${Y}-${M}-${D} ${h}:${m}:${s}]:`)
    vargs.push(Util.format(msg, ...args))
    vargs.push('\n')
    print && _log(...vargs)
    if (output) {
      Fs.mkdir(conf.log.dir, { recursive: true }, (err): void => {
        if (err) {
          _log(err.stack)
        } else {
          const tempFile = Path.resolve(conf.log.dir, `${Y}${M}${D}${type}.log`)
          Fs.appendFile(tempFile, vargs.join(''), (err): void => {
            err && _log(err.stack)
          })
        }
      })
    }
  }
}

export const logerr = (log: Function): Function => {
  return (msg: LogErrorOption): void => {
    const { stack, ip, status, method, url } = msg
    log('%s %s %s %s\n%s', ip, method, status, url, stack)
  }
}
