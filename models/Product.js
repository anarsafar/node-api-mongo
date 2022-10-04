const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: [true, 'product name is required!'],
    },
    productPrice: {
        type: Number,
        required: [true, 'product price is required!']
    },
    description: String,
    discounted: { type: Boolean, default: () => false, },
    date: { type: Date, default: Date.now },
});

const ProductModel = mongoose.model("Products", productSchema);
module.exports = ProductModel