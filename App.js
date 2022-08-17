const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3000
const {MONGOURI} = require('./keys')

require('./models/user')

mongoose.connect(MONGOURI)
mongoose.connection.on('connected', () =>{
    console.log("connected to mongodb")
}),
mongoose.connection.on('error', () =>{
    console.log("error connectioning", err)
}),


// app.get('/', (req ,res)=>{
//     res.send("hello world");
// })
// app.get('/home', (req ,res)=>{
//     res.send("home route");
// })
app.listen(PORT,()=>{
    console.log("server is running on ", PORT);
})

