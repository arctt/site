module.exports = (app) => {
  app.get('/admin', (req, res) => {
    res.render('pages/root/main.ejs', {
      title: 'Admin',

      scripts: [],
      stylesheets: ['/cli/pages/root/main.css'],

      navbarItem: 0,

      loadLocalLib: req.query.lib === 'local'
    })
  })
}
