
//esquema de prconst { Schema,model } = require("mongoose")
oductos
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