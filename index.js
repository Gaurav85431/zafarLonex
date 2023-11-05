
const express = require("express");
const app = express();
const http = require('http');
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path');
// mongoose.connect("mongodb+srv://merningday123:merningday123@cluster0.jtxz4yj.mongodb.net/software?retryWrites=true&w=majority")


app.use(cors());
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', function () {
// console.log('Connected to MongoDB');
// });
// const postRoutes = require("./routes/postRoutes");
// app.use("/api", postRoutes);
const post_route = require("./routes/postRoute")
app.use("/api", post_route);
/*
app.listen(5000, function () {
    console.log("Server is ready on port 5000");
});
*/

const PORT = 5000;
const DB = "mongodb+srv://merningday123:merningday123@cluster0.jtxz4yj.mongodb.net/software?retryWrites=true&w=majority";

mongoose.connect(DB)
    .then(() => {
        console.log("Connected to MongoDB");
        const server = http.createServer(app);
        server.listen(PORT, () => {
            console.log(`Server is running on :${PORT}`);
        });
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error);
    });
