
const express=require('express');
const app = express();

const connect=require('./config/db.js')
const moviecontroller = require('./controller/movie.controller.js')
const {register,login}=require("./controller/user.controller.js");

app.use(express.json());

app.use("/register",register);
app.use("/login",login);

app.use("/",moviecontroller);

console.log("hello")
app.listen(1500, async()=>{
    await connect();
    console.log("listening on the port 1500")
})