const { Schema,model } = require("mongoose")
const Product = model("Product")

//esquema de imagenes
const imageSchema = new Schema({
	product_id: {
		type: Schema.ObjectId,
		ref: "Product"
	},
	url: {
		type: String,
		required: true
	}
})

//exportar esquema
module.exports = model("Image",imageSchema)