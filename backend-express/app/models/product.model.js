module.exports = mongoose => {
	const Product = mongoose.model(
	  "product",
	  mongoose.Schema(
		{
		  productName: String,
		  productDescription: String,
		  productImage: String,
		  productPrice: String
		},
		{ timestamps: true }
	  )
	);
  
	return Product;
  };