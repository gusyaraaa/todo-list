const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    username: {type: String, default: 'User Name'},
    cards: [{type: Types.ObjectId, ref: 'Card'}]
})

module.exports = model('User', schema)