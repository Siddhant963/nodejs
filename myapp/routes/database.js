const mongoose = require('mongoose');
// localhost db connect 
mongoose.connect('mongodb://127.0.0.1:27017/myapp');

// banne wala har document mai kya kya hoga is shcema

const userschema =mongoose.Schema({ 
     username: String,
     name: String,
     age: Number,
     email: String
})
// make mongoose.Collection
module.exports = mongoose.model("user" , userschema);
