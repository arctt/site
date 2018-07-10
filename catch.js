let check = (app) => {
  app.use((req, res, next) => {
    res.status(404)
    check.err(404, 'File Not Found', req, res)
  })

  app.use((req, res, next) => {
    res.status(500)
    check.err(500, 'Internal Server Error', req, res)
  })

  app.get((req, res) => {

  })
}

check.err = function (statusCode, statusDisplayMessage, req, res, err) {
  res.render('templates/error.ejs', {
    title: 'Error',
    errorCode: statusCode,
    errorMessage: statusDisplayMessage,

    scripts: ['/cli/error/main.js'],
    stylesheets: ['/cli/error/main.css'],

    navbarItem: -1,
    loadLocalLib: req.query.lib === 'local'
  })
}

module.exports = check
