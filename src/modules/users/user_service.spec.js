const UserService = require('./user_service')

let service

describe('Test User Service', () => {
   beforeAll(() => {
      service = new UserService()
   })

   test('get returns an array', () => {
      const response = service.get({ collection: 'foo' })
      expect(Array.isArray(response)).toBe(true)
   })
})