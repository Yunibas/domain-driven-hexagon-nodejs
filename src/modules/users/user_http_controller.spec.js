const UserHttpController = require('./user_http_controller')

let controller

describe.skip('Test User HTTP Controller', () => {
   beforeAll(() => {
      controller = new UserHttpController()
   })

   test('dummy to stop jest errors', () => {
      expect(true).toBe(true)
   })
   // Need to mock Express requests
   // test('get returns an array', () => {
   //    const response = controller.get({ collection: 'foo' })
   //    expect(Array.isArray(response)).toBe(true)
   // })
})