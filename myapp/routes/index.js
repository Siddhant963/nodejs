var express = require('express');
var router = express.Router();
const usermodel = require('./database');
const { log } = require('debug/src/browser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// user created 
router.get('/create' , async function(req,res){ 
  const createduser= await usermodel.create({ 
    username: "sid@12",
    name: "sid",
    age: 21,
    email: "sid0867@gmail.com"
  });
  console.log("chal gya ");
  res.send(createduser)
  
})
// find the user in db 
router.get('/find' , async function(req, res){ 
let alluser = await usermodel.find();
res.send(alluser);
});
// delete the user from the db 
router.get('/delete' , async function(req, res){ 
  let deleteuser = await usermodel.findOneAndDelete({ username: "sid@12"});
  res.send(deleteuser);
})


// sesssion use 
router.get('/session' , function(req ,res){ 
  req.session.logusername = "siddhant";
  res.send("hello")
});
// session cheeck 
router.get('/checksession' , function(req,res){ 
  if(req.session.logusername === "siddhant"){ 
    res.send("hello MAntriji kese hai app 😎😎😎")
  };
 
})
//  session delete  
router.get("/sessiondelete" , function(req, res){ 
  req.session.destroy(function(err){ 
    if(err) throw err;
    res.send("session removed");
  })
})

// cookie setup  
router.get('/cookie', function(req, res, next) {
  res.cookie("age", 21);
});

// read cookie  
router.get('/read', function(req, res, next) {
  console.log(req.cookies.age);
  res.send('console pe dekh  a gai hogi ')
  
});

// delete cookie 
router.get('/deletec', function(req, res, next) {
  res.clearCookie('age');
  res.send('khatam tata by by gaya 💀💀☠️☠️👽👽👻')
});

module.exports = router;
