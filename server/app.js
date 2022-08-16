const express = require('express')
//const bodyParser = require('body-parser')

const app = express()

//app.use(bodyParser.json())

app.get('/',(req,res)=>{
res.send({
    m:"Sa"
})
})


app.listen(process.env.PORT || 900)