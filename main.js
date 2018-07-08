require('./lib/exemptError.js')

console.exempt.push(...[
  "Can't set headers after they are sent."
])

const express = require('express')
const ip = require('ip')
const log = require('logtools')
const path = require('path')
const st = require('stringtables')
const bodyParser = require('body-parser')
const config = require('./config.json')

const app = express()
const t = new st.Table(' Type ', ' Path                               ', ' Status ', ' Latency ', ' IP                                          ')

require('./lib/functions.js')(app)

app.set('view engine', 'ejs')

app.use('/cli', express.static(`${__dirname}/cli/`))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.enable('case sensitive routing')
app.enable('trust proxy')

app.all('*', (req, res, next) => {
  let method = req.method
  let path = req.originalUrl
  // let status = req.statusCode
  let ip = (req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress).split(',')[0]

  console.log(t.newLine(new st.Line(method, path, 'N/A', 'N/A', ip)))

  next()
})

app.listen(config.port, async () => {
  log.info('Initiating Starting Sequence...')
  console.clear()

  log.info('Starting...\n')

  await app.wait(100)

  log.info('Loading request files...')
  require('fs').readdirSync(path.join(__dirname, 'requests')).forEach(function (file) {
    require('./requests/' + file)(app)

    log.info('Loading in file: /requests/' + file)
  })
  log.info('Done!\n')

  await app.wait(100)

  log.info('Loading in catch file...')
  require('./catch.js')(app)
  log.info('Done!\n')

  await app.wait(100)

  log.info(`Ready! http://${ip.address()}:${config.port}/`)

  await app.wait(100)

  console.log(t.newHeader())
})
