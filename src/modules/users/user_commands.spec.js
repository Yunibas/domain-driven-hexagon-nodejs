const UserCommands = require('./user_commands')

let command

describe('Test User Commands', () => {
   beforeAll(() => {
      command = new UserCommands()
   })

   test('should return collection object', () => {
      const response = command.get({})
      expect(response).toMatchObject({ collection: 'users' })
   })
})