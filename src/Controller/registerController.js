const bcrypt = require('bcrypt');
const database = require('../Model/schema');


let check;

async function register(req,res){

    const login = req.body.login;
    const pass = req.body.pass;
    const email = req.body.email;

    checkUser(email, login, pass)
    res.status(200)
}


async function checkUser(email, login, pass, res){

   
    let pick = await database.mongoose_model_form.findOne({db_email:email})
    if(pick){
        check = true;
        return console.log("that e-mail already been taken")
    }else{
        check = false;
        return await saveNewUser(email, login, pass);
    }
}

function userCheck(req, res){

    return res.send(check);
}

async function saveNewUser(email, name, pass){

    const salt = await bcrypt.genSalt(12);
    const hashed_pass = await bcrypt.hash(pass, salt)

    const newData = new database.mongoose_model_form({
        db_email: email,
        db_name: name,
        db_pass: hashed_pass
    })
    await newData.save();
    console.log("----------------------------------")
    console.log("New user created: "+ name, pass); 
}

module.exports = {register, userCheck}