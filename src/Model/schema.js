const mongoose = require('mongoose');

// ---- Schema Settings ---- //
const mongoose_schema_form = mongoose.Schema({
    db_email  :{type: String, minlength:6, maxlength:45, require},
    db_name   :{type: String, minlength:6, maxlength:45, require},
    db_pass   :{type: String, minlength:6, maxlength:200, require},
    createdAt :{type: Date, default: Date.now}
})


// ---- Model + DB-name Settings ---- //
const mongoose_model_form = mongoose.model('User', mongoose_schema_form);

module.exports = {mongoose_schema_form, mongoose_model_form}