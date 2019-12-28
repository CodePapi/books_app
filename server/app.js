const express = require('express')
const graphHTTP = require('express-graphql')


const app = express()
app.use('/graphql', graphHTTP({

}))
app.listen(333, ()=>{
    console.log('listening to port 333')
})