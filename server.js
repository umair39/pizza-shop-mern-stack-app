// require('dotenv').config()
const express = require('express');
const path = require('path')
const dotenv = require('dotenv')
// const mongoose = require('mongoose');
const connectDB = require('./config/config.js')
const morgan = require('morgan');


dotenv.config()

//connection mongoDB
connectDB();
const app = express();
//middleware
app.use(express.json())
app.use(morgan('dev'))
//route
app.use('/api/pizzas', require('./routes/pizzaRoute'));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoute"));

if (process.env.NODE_ENV === 'production'){
   app.use(express.static(path.join(__dirname, '/client/build')))
   app.get('*', (req,res) =>{
          res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
   });
}else{
       app.get('/', (req, res) => {
              res.send("<h1> hello server h1</h1>")
       });
}



const port = process.env.PORT || 3030;
app.listen(port, () => {
          console.log(`server running on ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`.bgMagenta.white);
});