const {Schema,model} = require("mongoose")
const Sales = model("Sales")

const salesproductSchema = new Schema({
	sales_id: {
		type: Schema.ObjectId,
		ref: "Sales" 
	},
	name: {
		type: String,
		required: true
	},
	quantity: {
		type: Number,
		required: true
	},
	price: {
		type: Number,
		required: true
	}
})

module.exports = model("SalesProduct",salesproductSchema)