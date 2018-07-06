module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('pages/root/main.ejs', {
      title: "Home",

      scripts: [],
      stylesheets: ['/cli/pages/root/main.css'],

      navbarItem: 0,

      loadLocalLib: req.query.lib === "local"
    });
  });
}