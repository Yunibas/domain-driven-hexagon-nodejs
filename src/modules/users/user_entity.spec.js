const UserEntity = require('./user_entity')

let entity

describe('Test User Entity', () => {
   beforeAll(() => {
      entity = new UserEntity()
   })

   test('dummy', () => {
      expect(true).toBe(true)
   })
})