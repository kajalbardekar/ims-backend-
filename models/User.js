const mongoose=require("mongoose");


const userschema=new mongoose.Schema({

  firstname:{
     type:String
  },
  lastname:{
    type:String

  },
  email:{
    type:String,
    unique:true
  },
  password:{
    type:String
  }

},  {
    timestamp:true
})

module.exports=mongoose.model("user",userschema);