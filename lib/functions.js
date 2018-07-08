module.exports = function (object) {
  object.wait = function (ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms)
    })
  }
}
