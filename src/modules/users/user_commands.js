const Command = require('../../commands/command')

module.exports = class UserCommands extends Command {
   constructor() {
      super()
   }

   get(req) {
      let response = { collection: 'users' }
      if (req.body?.where) response.where = req.body.where
      if (req.body?.orderBy) response.orderBy = req.body.orderBy
      if (req.body?.limit) response.limit = req.body.limit
      return response
   }
}