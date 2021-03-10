const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    date: {type: Date, default: Date.now},
    owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Card', schema)