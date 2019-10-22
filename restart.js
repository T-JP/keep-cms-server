const fs = require('fs')
const { spawn } = require('child_process')

const log = console.log
const conf = {
  server: './server/main.js'
  // server: './server/main.js'
  // server: './server/keep/index.js'
}

//多次只执行一次
function once(fn, wait) {
  let timeout
  return function() {
    timeout && clearTimeout(timeout)
    timeout = setTimeout(fn, wait)
  }
}

//统一启动子进程
function runcmd(command, args, options) {
  return spawn(command, args, options)
}
//启动node进程
function node() {
  let np
  return function() {
    if (np) np.killed || np.kill()
    np = runcmd('node', ['--inspect', conf.server])
    np.stdout.on('data', data => {
      log(`${data}`)
    })
    np.stderr.on('data', data => {
      log(`${data}`)
    })
  }
}
const runNode = node()

//防抖3秒
const runOnceNode = once(() => {
  runNode()
}, 3000)

function runtsw() {
  const np = runcmd('npm', ['run', 'tsw'], { shell: true })
  np.stdout.once('data', () => {
    log('tsc -w is ok')
  })
  np.stdout.on('data', () => {
    // log(`${data}`)
    runOnceNode()
  })
}

function runtsc() {
  const np = runcmd('npm', ['run', 'tsc'], { shell: true })
  np.on('close', () => {
    log('tsc is ok')
    runtsw()
  })
}
runtsc()
