const { Schema,model } = require("mongoose")
const User = model("User")
const Product = model("Product")

//esquema de carrito de compra
const carSchema = new Schema({
	user_id: {
		type: Schema.ObjectId,
		ref: "User"
	},
	product_id: {
		type: Schema.ObjectId,
		ref: "Product"
	},
	quantity: {
		type: Number,
		required: true
	}
})

//exportar esquema
module.exports = model("Car",carSchema)
