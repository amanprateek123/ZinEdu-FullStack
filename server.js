const express = require('express')
require('./database/mongoose')
const userRoutes = require('./routes/users')
const freeTrialRoutes = require('./routes/freeTrial')
const interestRoutes = require('./routes/interest')
const freeTrial = require('./models/freeTrial')

const app = express()

const port = process.env.PORT || 5000

app.use(express.json())

app.use(userRoutes)
app.use(interestRoutes)
app.use(freeTrialRoutes)


app.listen(port,()=>{
    console.log('Server is connected on port '+ port)
})