const bcrypt = require('bcrypt');
const database = require('../Model/schema');

let check;

async function loginCheck(req, res){

    const login = req.body.login;
    const pass = req.body.pass;

    await getAccount(login, pass);
}

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

function userCheckLogin(req, res){

    return res.json(check);
}

module.exports = {loginCheck, userCheckLogin}