// local imports
import { connect } from "mongoose";

// DataBase Connect MongoDB 
connect(process.env.DB).then(() => {
    // On Fillfill
    console.log("😀 DB is Connected => 🥰🥰🥰🥰");
}).catch((e) => {
    // On Error 
    console.log("DB ERROR", e);
})