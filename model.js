const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            default: 'usuario',
        },
        email: {
            type: String,
            required: true,
            default: 'usuario@mail.net',
        },
    },
    {timestamps:true}
);

module.exports.UserModel =  model('users', UserSchema);