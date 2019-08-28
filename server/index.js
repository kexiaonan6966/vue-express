const express = require('express')

const app = express()
app.use(require('cors')())
app.use(express.json())

app.set('secret', '123456')
app.use('/uploads', express.static(__dirname + ('/uploads')))


require('./plugins/db')(app)
require('./routers/admin')(app)
require('./routers/web')(app)


app.listen(3000, async() => {
    console.log('Running....')
})