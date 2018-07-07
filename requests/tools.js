module.exports = (app) => {
  app.get('/tools', (req, res) => {
    res.render('pages/root/main.ejs', {
      title: "Tools",

      scripts: [],
      stylesheets: ['/cli/pages/root/main.css'],

      navbarItem: 3,

      loadLocalLib: req.query.lib === "local"
    });
  });

  app.get('/t', (req, res) => {
    let tool = req.query.tool;
    let availible = [];

    if (!tool)
      return res.render("templates/redirect.ejs", {
        url: "/tools"
      });

    availible.forEach((t) => {
      if (tool === t)
        return res.render("pages/tools/" + tool + ".ejs", {
          url: "/tools"
        });
    });

    res.render("templates/redirect.ejs", {
      url: "/tools"
    });
  });

  app.get('/dev', (req, res) => {

  });
}