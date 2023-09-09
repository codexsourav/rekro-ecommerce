import "../db";
import mongoose from 'mongoose';

// Define a User schema
const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    sellprice: Number,
    discount: Number,
    featured: {
        type: Boolean,
        default: false,
    },
    images: [String],
    size: [String],
    color: [String],
    stock: Number,
    sells: {
        type: Number,
        default: 0,
    },
    stars: {
        type: Number,
        default: 0,
    },
    desc: String,
    sortdesc: String,
    productcollection: String,
    date: String,

});

// Create a User model from the schema
const Products = mongoose.models.Products || mongoose.model('Products', productSchema);
export default Products;