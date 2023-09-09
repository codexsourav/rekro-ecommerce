import "../db";
import mongoose from 'mongoose';


// Define a User schema
const homeSchema = new mongoose.Schema({
    heroimg: String,
    herotitle: String,
    herosubtitle: String,
    herolink: String,
    herolinktitle: String,
    firstcollection: {
        title: String,
        link: String,
        linktitle: String,
        image: String,
    },
    secendcollection: {
        title: String,
        link: String,
        linktitle: String,
        image: String,

    },
    thurdcollection: {
        title: String,
        link: String,
        linktitle: String,
        image: String,
    },
    banner: {
        image: String,
        title: String,
        subtitle: String,
        link: String,
        linktitle: String
    },
});

// Create a User model from the schema
const HomePage = mongoose.models.HomePage || mongoose.model('HomePage', homeSchema);
export default HomePage;