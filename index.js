const express = require('express')
const app = express();
const mongoose = require('mongoose')
const productRouter = require('./Routes/ProductRoutes')

app.use(express.json())

app.listen(2555, ()=> console.log('server running on 5000'))

mongoose.connect('mongodb://localhost:27017/')
    .then(()=> console.log('database connected..'))
    .catch((err) => console.log(err))

app.use("", productRouter);

console.log("Yap");


// app.get('/', (req, res)=>{
//     res.send('server reacted...')
// })