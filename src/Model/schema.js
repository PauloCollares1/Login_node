const mongoose = require('mongoose');

// ---- Schema Settings ---- //
const mongoose_schema_form = mongoose.Schema({
    db_email  :{type: String, minlength:6, maxlength:45, required:true},
    db_name   :{type: String, minlength:5, maxlength:45, required:true},
    db_pass   :{type: String, minlength:6, maxlength:200, required:true},
    createdAt :{type: Date, default: Date.now}
})


// ---- Model + DB-name Settings ---- //
const mongoose_model_form = mongoose.model('User', mongoose_schema_form);

module.exports = {mongoose_schema_form, mongoose_model_form}