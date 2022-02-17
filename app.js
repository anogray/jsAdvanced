const express = require("express"),
mongoose = require("mongoose"),
app = express(),
dotenv = require("dotenv"),
checkRoute = require("./routes/bulkRoute");

dotenv.config();

app.listen((process.env.PORT), ()=> console.log("Server is listening"));

mongoose.connect(process.env.DBURI ,  
    { useNewUrlParser: true , useUnifiedTopology: true, useCreateIndex: true }, (err)=>{
    
    if(err) return console.error(err);
    
    console.log("Connected to MongoDb");
    });

console.log("firstLog");


app.use(express.json());
app.use("/check", checkRoute);