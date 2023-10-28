const mongoose = require('mongoose');

// create schema (breakdown of what our data should look like)
const productSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        price: Number,
        isAvailable: Boolean,
    },
    {
        timestamps: true
    }
);

// create Model with that schema
// whatever we put as the collection name will be lowercased and pluralized +s
// Veggies > veggies
const Products = mongoose.model("Products", productsSchema);

module.exports = Products;

