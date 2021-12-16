const mongoose = require('mongoose');
require("colors")


const connectDB = async () => { 
    try{
        const url = process.env.MONGO_URI
        const conn = await mongoose.connect(url,{
            // useCreateIndex:true, 
            useNewUrlParser: true, 
           
            useUnifiedTopology: true
        })

            
        console.log(`MongoDB database successfully! ${conn.connection.host}`.bgCyan.white)
    }catch (error){
         console.log(`error: ${error.message}`.bgRed.white);
    }
}

module.exports =  connectDB;
// mongodb+srv://asdfg:pass123%21wrd@cluster0.jqxar.mongodb.net/myFirstDatabase?retryWrites=true&w=majority