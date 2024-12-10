// var a  = require('./script');

// console.log(a );

const express = require('express')
const app = express()
 app.set("view engine", "ejs");
 app.use(express.static('./public'));
app.use(function (req , res , next){ 
  // console.log("hello");
  next();
  
})
// midelware run before the routes 
app.get('/', function (req, res) {
  res.render('index' , {title:'siddhant landing page', teg: "mantriji jo hai wo bahut hi gusse wale aadmi hai " })
})

app.get('/profile/:username', function (req, res) {
     res.send(` ${req.params.username} is a good boy`)
   })

   app.get('/error', function (req, res) {
    throw new Error("KYA CODE BANEGA RE TU ");
  })
app.use(  function errorHandler (err, req, res, next) {
  if (res.headersSent) {
   return next(err);
  } 
 res.status(500)
 res.render('error' , {error: err})
})

app.listen(3010)