const mongoose = require('mongoose');

const conn = mongoose.connect(process.env.ATLAS_URI)
        .then(db => {
            console.log("Database Connected");
            return db;
        }).catch(error => {
            console.log(error);
            console.log("Database not Connected");
            throw new Error("something happened, see detail log");
          })

module.exports = conn;