const express = require('express')
const HttpController = require('../../controllers/http_controller')
const UserHandler = require('./user_handlers')

const router = express.Router()

module.exports = class UserHttpController extends HttpController {
   constructor() {
      super()
      this.handler = new UserHandler()

      router.get('/', (req, res) => {
         const response = this.handler.get(req)
         res.status(200).send(JSON.stringify(response))
      })

      return router
   }
}