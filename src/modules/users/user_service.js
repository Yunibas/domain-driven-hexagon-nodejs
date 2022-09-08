const Service = require('../../services/service')
const UserEntity = require('./user_entity.js')
const UserRepository = require('./user_repository')

module.exports = class UserService extends Service {
   constructor() {
      super()
      this.entity = new UserEntity()
      this.repository = new UserRepository()
   }

   get(props) {
      // Doesn't need to call entity for query
      return this.repository.get(props)
   }
}