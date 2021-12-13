
const express=require('express');

const multer=require('multer');
const path=require('path');

const app = express();
const uploads=require("./uploads");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueprefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueprefix)
    }, 


    
  })
  
  const upload = multer({ storage: storage })