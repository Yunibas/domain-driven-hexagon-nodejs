module.exports = {
   getDocs({ collection, where, orderBy, limit }) {
      return []
   },
   getDoc({ collection, id }) {
      return {}
   },
   createDoc({ collection, doc }) {
      return true
   },
   updateDoc({ collection, id, updates }) {
      return true
   },
   deleteDoc({ collection, id }) {
      return true
   },
}