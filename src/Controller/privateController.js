const jwt = require('jsonwebtoken');
require('dotenv').config();

async function access(req, res, next){

    let cookie_token = await req.cookies.mytoken;
    console.log(cookie_token)
    if(cookie_token){
        try {
            await jwt.verify(cookie_token, process.env.SECRET)
            next()
        } catch (error) {
            res.status(400).redirect('/notfound');
        }
    }else{
        console.log("Don't have authorization")
        return res.status(400).redirect('/notfound');
    }
}

module.exports = {access}