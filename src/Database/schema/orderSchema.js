import { formatDate } from "@/app/api/utills";
import "../db";
import mongoose from 'mongoose';

// Define a User schema
const today = new Date();
const date = formatDate(today);
const orderSchema = new mongoose.Schema({
    product_id: String,
    user_id: String,
    address: {
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
    },
    orderdate: {
        type: String,
        default: date,
    },
    orderstatus: {
        type: String,
        default: "Place Order",
    },
    tracklink: String,
    paymentType: String,
    color: String,
    size: String,
    amount: Number,
    qut: Number,
});

// Create a User model from the schema
const Orders = mongoose.models.Orders || mongoose.model('Orders', orderSchema);
export default Orders;