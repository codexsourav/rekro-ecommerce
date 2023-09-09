import "../db";
import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

// Define a User schema
const userSchema = new mongoose.Schema({
    name: String,
    fname: String,
    lname: String,
    password: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        default: 'user',
    },
});





// Add a 'pre' hook to hash the password before saving
userSchema.pre('save', function (next) {
    const user = this; // Get a reference to the user document being saved
    // Only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
    // Generate a salt and hash the password with it
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);
            user.password = hash; // Set the hashed password
            next(); // Continue with the save operation
        });
    });
});
// Create a User model from the schema
const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;

