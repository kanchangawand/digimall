module.exports = app => {
    const products = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Product
    router.post("/", products.create);
  
    // Retrieve all Product
    router.get("/", products.findAll);


    
    // Delete a Tutorial with id
    router.delete("/:id", products.delete);
  
    router.delete("/", products.deleteAll);
  
    app.use('/api/products', router);
  };