const express = require('express')
const ClientHttpController = require('./controllers/client_http_controller')
const UserHttpController = require('./modules/users/user_http_controller')

const app = express()
app.use(express.json())
app.use((req, res, next) => {
   // middleware
   next()
})

app.use('/users', new UserHttpController())

app.use('/', new ClientHttpController())

app.use((req, res) => {
   res.sendStatus(404)
})

app.listen(3000)