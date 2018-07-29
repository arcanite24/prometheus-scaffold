const _prometheus = require('@epsidev/prometheus')
const path = require('path')

const connections = require('./config/connections')
const models = require('./config/models')
const server = require('./config/server')

// Initial global prometheus object
global.prometheus = {
  config: {
    server,
    models,
  }
}

// Use dotenv to load enviroment variables from .env file
require('dotenv').config()

// Register models
_prometheus.models.registerModels(
  _prometheus.app,
  path.resolve(__dirname, 'models'),
  connections[models.connection].adapter,
  connections[models.connection].uri,
).then(models => {

  // Register controllers
  _prometheus.controllers.registerControllers(
    _prometheus.app,
    path.resolve(__dirname, 'controllers')
  ).then(({actions, actionsFunctions}) => {

    // Save registered actions globally for controllers to handle the blueprints
    global.prometheus.info = {
      actions,
      actionsFunctions
    }

    // Start the server
    _prometheus.startServer(server, () => {

      // This function is initialized when everything is ok
      // Now it's safe to execute anything related with the server
      console.log(prometheus.info.actionsFunctions);    
  
    })

  })

})