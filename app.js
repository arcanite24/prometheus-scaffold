const prometheus = require('@epsidev/prometheus')
const path = require('path')

const connections = require('./config/connections')
const models = require('./config/models')
const server = require('./config/server')

prometheus.models.registerModels(
  prometheus.app,
  path.resolve(__dirname, 'models'),
  connections[models.connection].adapter,
  connections[models.connection].uri,
).then(models => {

  prometheus.startServer(server, () => {


  })

})