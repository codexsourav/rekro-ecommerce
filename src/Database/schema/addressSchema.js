import "../db";
import mongoose from 'mongoose';

// Define a User schema
const addressSchema = new mongoose.Schema({
    user_id: String,
    fname: String,
    lname: String,
    company: String,
    country: String,
    line1: String,
    line2: String,
    city: String,
    state: String,
    zipCode: String,
    email: String,
    phone: String,
});

// Create a User model from the schema
const Address = mongoose.models.Address || mongoose.model('Address', addressSchema);
export default Address;