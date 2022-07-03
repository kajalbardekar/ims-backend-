const bcrypt = require('bcrypt');
const encryptPassword=async(req,res,next)=>{
try {
    const hash=await  bcrypt.hash(req.body.password, 10);
      req.body.password=hash;
      next();
    }
catch(error){
    res.json({
        message:"Error in incrypting password"
    })

}

}


module.exports={
    encryptPassword
}