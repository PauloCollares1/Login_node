require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const database = require('../Model/schema');


// Verify and help in usercheck function
let check;

// check if ther is a match at the user and mongodb
async function getAccount(req, res){

    const login = req.body.login;
    const pass = req.body.pass;

    let pick = await database.mongoose_model_form.findOne({db_name:login})
        if(pick){
            let pass_check = bcrypt.compareSync(pass, pick.db_pass)
            if(pass_check){
                check = true;
                // JWT authentication generete token
                const secret = process.env.SECRET;
                const token = jwt.sign({id:pick._id},secret)
                // send token in the request head authentication - O PROBLEMA TA AQUI 
                res.header('My-token', token)
                res.send(200); 
            }else{
                check = false;
                console.log("That's not the password")
                res.end();
            }
        }else{
            res.end()
            check = false;
        }
}



// Send to front a boolean if the user can or can not login
function userCheck(req, res){

    return res.status(200).json(check);   
}



module.exports = {userCheck, getAccount}