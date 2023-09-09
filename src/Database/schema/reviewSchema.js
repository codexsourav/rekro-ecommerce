import "../db";
import mongoose from 'mongoose';

// Define a User schema
const reviewSchema = new mongoose.Schema({
    name: String,
    product_id: String,
    date: String,
    star: Number,
    review: String,
    email: String,

});

// Create a User model from the schema
const Reviews = mongoose.models.Reviews || mongoose.model('Reviews', reviewSchema);
export default Reviews;