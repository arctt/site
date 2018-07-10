const { exec } = require('child_process')

exports.Terminal = class Terminal {
  constructor (options = { dir: '/' }) {
    exec(`cd ${options.dir}`, (err, stdout, stderr) => {
      if (err) {
        throw err
      }
    })
  }

  exec (command, callback = this._defaultCallback) {
    exec(command, (err, stdout, stderr) => {
      if (err) { throw new Error('Terminal execution error:' + err) }

      return callback(stdout, stderr)
    })
  }

  jarFile (path = './main.jar', options = '', callback = this._defaultCallback) {
    this.exec(`java -jar ${path} ${options}`, callback)
  }

  dir (path = '~/', callback = this._defaultCallback) {
    this.exec(`cd ${path}`, (a, b, c, callback) => this._handler(a, b, c, callback))
  }

  list (path, options = '', callback = this._defaultCallback) {
    this.exec(`ls ${options} ${path}`, (a, b, c, callback) => this._handler(a, b, c, callback))
  }

  _defaultCallback () {
    return 0
  }

  _handler (err, stdout, stderr, callback) {
    if (err) { throw err }

    callback(stdout, stderr)
  }
}
