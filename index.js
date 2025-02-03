const express = require('express')
const app = express();
const mongoose = require('mongoose')
const productRouter = require('./Routes/ProductRoutes')

app.use(express.json())

app.listen(2555, ()=> console.log('server running on 5000'))

mongoose.connect('mongodb+srv://sriram202005:578b31053@mycluster.kmn9y.mongodb.net/')
    .then(()=> console.log('database connected..'))
    .catch((err) => console.log(err))

app.use("", productRouter);



app.get('/', (req, res)=>{
    res.send('server reacted...')
})
