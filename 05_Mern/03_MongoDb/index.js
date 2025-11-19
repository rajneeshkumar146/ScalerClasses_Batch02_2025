const mongoose = require("mongoose");
const express = require("express");

// Important links and URL
const DB_URL = "mongodb+srv://rajneeshkumar146_db_user:QVh6uVWK4xKBYuhd@cluster0.l2uqpve.mongodb.net/";

// Constants
const PORT = 3000;
const HOST = "localhost";

// Setup
const app = express();
app.use(express.json());

// Connect to DB
mongoose.connect(DB_URL)
    .then(function (connection) {
        // console.log("Connected to MongoDB: ", connection);
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.log("Error while connecting with DB: ", err);
    });


/**
   "product_name":"iPhone 19",
   "product_price":"$2000",
   "isInStock":true,
   "category":"Phone",
   "password":"123456789",
   "confirmPassword":"123456789"
 */

// Create a schema.
const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    product_price: {
        type: String,
        required: true
    },
    isInStock: {
        type: Boolean,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    confirmPassword: {
        type: String,
        required: true,
        minLength: 8,
        validate: {
            validator: function () {
                return this.password === this.confirmPassword;
            },
            message: "Password and confirm password should be same."
        }
    }
});

// Const product model 
const productModel = mongoose.model("Products", productSchema);

// http://localhost:3000/api/products
app.post("/api/products", async function (req, res) {
    const body = req.body;
    console.log(body);

    try {
        const product = await productModel.create({
            category: body.category,
            product_name: body.product_name,
            product_price: body.product_price,
            isInStock: body.isInStock,
            password: body.password,
            confirmPassword: body.confirmPassword
        });

        console.log("Product is created: ", product);

        return res.status(200).json({ message: "Product created successfully" })
    } catch (err) {
        console.log("Error in /api/products: ", err);
        return res.status(500).json({ message: err.message });
    }
});

app.get("/api/products", async function(req, res) {
    const allProducts = await productModel.find();
    // console.log("allProducts: ", allProducts);
    return res.status(200).json(allProducts);
});

app.get("/api/products/:id", async (req, res) => {
    const id = req.params.id;
    const product = await productModel.findById(id);
    res.status(200).json(product);
});

app.patch("/api/products/:id", async (req, res) => {
    await productModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Product updated successfully" });
});

app.delete("/api/products/:id", async (req, res) => {
    await productModel.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json({ message: "Product Deleted successfully" });
});



// start the server
app.listen(PORT, () => {
    console.log(`server is running on http://${HOST}:${PORT}`);
});