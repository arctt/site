const JSON_LOAD = __dirname + '../cli/pages/portals/json';
const IMG_LOAD = __dirname + '../cli/pages/portals/img';

module.exports = (app) => {
  app.get('/portals', (req, res) => {
    let page = req.query.p;

    let json = require(`${JSON_LOAD}/${page}.json`) ? 
      require(`${JSON_LOAD}/${page}.json`) :
      require(`${JSON_LOAD}/1.json`);


    res.render('pages/portals/main.ejs', {
      title: "Home",

      scripts: [],
      stylesheets: ['/cli/pages/portals/main.css'],

      navbarItem: -1,

      page: json,

      loadLocalLib: req.query.lib === "local"
    });
  });
}