
const express=require('express');
const app = express();

const connect=require('./config/db.js')

const usercontroller=require("./controller/user.controller.js");

app.use(express.json());

app.use("/register",usercontroller);
app.use("/login",usercontroller);


console.log("hello")
app.listen(1500, async()=>{
    await connect();
    console.log("listening on the port 1500")
})