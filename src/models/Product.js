const { Schema,model } = require("mongoose")

//esquema de productos
const productSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	quantity: {
		type: Number,
		required: true,
		default: 0
	},
	price: {
		type: Number,
		required: true,
		default: 0
	}
})

//exportar esquema
module.exports = model("Product",productSchema)