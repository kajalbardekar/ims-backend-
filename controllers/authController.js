const User = require("../models/User");
const { passwordCompare,jwtGen } = require("../utils/utils")

const signUp = (req, res) => {
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password

    })
    user.save().then(data => {
        res.json({
            message: "Success"
        })
    }).catch(err => {
        res.json({
            messsage: err.message
        })
    })

}




const signIn = (req, res) => {
    User.findOne({ email: req.body.email }).then(result => {
        console.log("db password:", result.password)
        console.log(" user password:", req.body.password)

        passwordCompare(result.password, req.body.password).then(data => {
            if (data) {

                jwtGen({username:result.email}).then(token=>{

                    res.json({
                        message: "Signin success"
                        token:token
                        
                     })
                })
             
            }
            else {
                res.json({
                    message: "Signin failed"
                })

            }
        })
    }).catch(err => {
        res.json({
            message: "user not found"
        })
    })
}



module.exports = {
    signUp,
    signIn
}