const express = require('express')
const HttpController = require('./http_controller')

const router = express.Router()

module.exports = class ClientHttpController extends HttpController {
   constructor() {
      super()

      router.get('/', (req, res) => {
         res.status(200).send('Service Available')
      })

      return router
   }
}