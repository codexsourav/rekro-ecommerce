import "../db";
import mongoose from 'mongoose';

// Define a User schema
const collectionSchema = new mongoose.Schema({
    title: String,
    image: String,
});


// Create a User model from the schema
const Collection = mongoose.models.Collection || mongoose.model('Collection', collectionSchema);
export default Collection;

