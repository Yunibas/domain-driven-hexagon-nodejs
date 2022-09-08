const UserHandlers = require('./user_handlers')

let handler

describe('Test User Handlers', () => {
   beforeAll(() => {
      handler = new UserHandlers()
   })

   test('should return an array', () => {
      const response = handler.get({})
      expect(Array.isArray(response)).toBe(true)
   })
})