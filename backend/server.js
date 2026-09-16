const productRoutes = require("./routes/productRoutes");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();



const app = express();


// ===============================
// Middleware
// ===============================

app.use(cors());
app.use(express.json());


// ===============================
// MongoDB Connection
// ===============================

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully");
    })
    .catch((error) => {
        console.error(
            "MongoDB Connection Error:",
            error.message
        );
    });


// ===============================
// Product Routes
// ===============================

app.use("/api/products", productRoutes);


// ===============================
// Home Route
// ===============================

app.get("/", (req, res) => {

    res.send("ShopEase Backend is Running!");

});


// ===============================
// Start Server
// ===============================

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    "0.0.0.0",
    () => {

        console.log("=================================");
        console.log("ShopEase Backend is Running!");
        console.log(`Server running on port ${PORT}`);
        console.log("=================================");

    }
);


// ===============================
// Server Error Handling
// ===============================

server.on("error", (error) => {

    console.error(
        "SERVER ERROR:",
        error
    );

});