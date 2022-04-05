const bcrypt = require('bcrypt');
const database = require('../Model/schema');


// Verify for help usercheck function
let check;


// Take data from front end and use that in another function
async function loginCheck(req, res){

    const login = req.body.login;
    const pass = req.body.pass;

    await getAccount(login, pass);
    res.sendStatus(200).end();
}

// check if ther is a match at the user and mongodb
async function getAccount(login, pass){

    let pick = await database.mongoose_model_form.findOne({db_name:login})
        if(pick){
            let pass_check = bcrypt.compareSync(pass, pick.db_pass)
             if(pass_check){
                check = true;
                 return console.log("Login Ok !")
            }else{
                check = false;
                return console.log("That's not the password")
            }
        }else{
            check = false;
        }
}

// Send to front a boolean if the user can or can not login
function userCheck(req, res){

    return res.json(check);   
}

module.exports = {loginCheck, userCheck}