const FirestoreAdapter = require('./firestore_adapter')

let adapter

describe('Test Firestore Adapter', () => {
   beforeAll(() => {
      adapter = new FirestoreAdapter()
   })
   test('getDocs returns array', () => {
      const response = adapter.getDocs({ collection: 'foo' })
      expect(Array.isArray(response)).toBe(true)
   })

   test('getDoc returns object', () => {
      const response = adapter.getDoc({
         collection: 'foo',
         id: 'a',
      })
      expect(response).toEqual({})
   })

   test('createDoc returns true', () => {
      const response = adapter.createDoc({
         collection: 'foo',
         doc: { name: 'h' },
      })
      expect(response).toBe(true)
   })

   test('updateDoc returns true', () => {
      const response = adapter.updateDoc({
         collection: 'foo',
         id: 'a',
         updates: { name: 'h' },
      })
      expect(response).toBe(true)
   })

   test('deleteDoc returns true', () => {
      const response = adapter.deleteDoc({
         collection: 'foo',
         id: 'a',
      })
      expect(response).toBe(true)
   })
})