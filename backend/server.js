const express = require("express")
const app = express()
require('dotenv').config();
var bodyParser = require('body-parser');
require("./db.js"); 


app.use(bodyParser.urlencoded({ extended: false }));
let PORT = 3000;
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const Products = require("./models");
const { config } = require("dotenv");



//start middleware
app.use(express.json());
app.use(cors());

app.use(morgan("dev"));
app.use(helmet())
//import routes

app.get("/server" , (req, res)=>{
    res.send("Hello, I'm up and running.")
});

app.get("/server/products", async (req, res) => {
    try {
      const productData = await Products.find();
      res.json(productData);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).send("Internal server error");
    }
  });
  

  app.get("/server/products/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const productData = await Products.findById(id);
  
      if (!productData) {
        return res.status(404).send("Product not found");
      }
  
      res.json(productData);
    } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).send("Internal server error");
    }
  });
  





app.listen("/server", (res, req)=>{
    console.log(`Server is listening on port ${PORT}`)
})