const UserRepository = require('./user_repository')

let repository

describe('Test User Repository', () => {
   beforeAll(() => {
      repository = new UserRepository()
   })

   test('get returns an array', () => {
      const response = repository.get({ collection: 'foo' })
      expect(Array.isArray(response)).toBe(true)
   })
})