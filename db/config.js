const mongoose = require("mongoose");

const dbConnect = async ( ) => {
    try {
        await mongoose.connect( process.env.DB_CONNECT);
        console.log("Conectado a la base")
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnect