
const db = require("../models");
const Product = db.products;

// Create and Save a new product
exports.create = (req, res) => {
  // Validate request
  if (!req.body.productName) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a product
  const product = new Product({
    productName: req.body.productName,
    productDescription: req.body.productDescription,
    productImage: req.body.productImage,
    productPrice: req.body.productPrice
  });

  // Save product in the database
  product
    .save(product)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the product."
      });
    });
};

// Retrieve all products from the database.
exports.findAll = (req, res) => {
  Product.find()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving Products."
    });
  });
};


// Delete a product  with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
        });
      } else {
        res.send({
          message: "Product was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Product with id=" + id
      });
    });
};

//Delete all product
exports.deleteAll = (req, res) => {
  Product.deleteMany({})
    .then(data => {
      res.send({
        message: `Products were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Products."
      });
    });
};