const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productSchema = new schema({
    name: {
        type: String
    },
    gender: {
        type: String
    },
    brand: {
        type: String
    },
    content: {
        type: String
    },
    price: {
        type: String
    },
    skind: {
        type: String
    },
    src: {
        type: Array
    },
    count: {
        type: String
    },
    size: {
        type: Array
    },
    type: {
        type: String
    }
}, {timestamps: true});

const product = mongoose.model('product', productSchema);
module.exports = product;