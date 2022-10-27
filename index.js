// Branch file

const express = require('express')
const app = express()
const port = 3000;
const path = require ('path');
const fs = require("fs");

app.get('/', (req, res) => {
    res.send('Hello world')
  })

 app.get('/image', (req, res) => {
  let imagePath = path.join (__dirname, "image.jpg")
    res.sendFile(imagePath)
  })
  
 app.get('/dynamicimage', (req, res) => {
  console.log (req.query.imagename)
  let a=req.query.imagename
    let imagePath = path.join (__dirname, a)
    res.sendFile(imagePath)
  
    })
 ;


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

