const bcrypt=require('bcrypt');
const jwt=require("jsonwebtoken");
const key="imsp"

const passwordCompare=async(dbPassword,enteredPassword)=>{
  try 
  {
    await bcrypt.compare(enteredPassword, dbPassword) 
  }
  catch(error){
  return false;
  }
}





const jwtGen= async (userdata)=>{

    try{
        const token= await jwt.sign(userdata,key)
            return token
    }
    catch{
        return false;
    }
}


module.exports={
    passwordCompare,
    jwtGen
}