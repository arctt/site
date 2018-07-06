module.exports = (app) => {
  app.get('/tools', (req, res) => {
    res.render('pages/root/main.ejs', {
      title: "Tools",

      scripts: [],
      stylesheets: ['/cli/pages/root/main.css'],

      navbarItem: 0,

      loadLocalLib: req.query.lib === "local"
    });
  });
}