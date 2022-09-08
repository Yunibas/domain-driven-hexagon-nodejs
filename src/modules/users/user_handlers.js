const Handler = require('../../handlers/handler')
const UserCommands = require('./user_commands')
const UserService = require('./user_service')

module.exports = class UserHandler extends Handler {
   constructor() {
      super()
      this.command = new UserCommands()
      this.service = new UserService()
   }

   get(req) {
      const command = this.command.get(req)
      return this.service.get(command)
   }
}