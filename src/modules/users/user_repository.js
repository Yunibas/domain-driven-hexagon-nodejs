const Repository = require('../../repositories/repository')
const FirestoreAdapter = require('../../adapters/firestore_adapter')

module.exports = class UserRepository extends Repository {
   constructor() {
      super()
      this.adapter = new FirestoreAdapter()
   }

   get(props) {
      return this.adapter.getDocs(props)
   }
}