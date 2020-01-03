const { Schema,model } = require("mongoose")

//esquema de Currency
const currencySchema = new Schema({
	currency: {
		type: String,
		required: true
	},
	value: {
		type: Number,
		required: true
	}
})

//exportar esquema
module.exports = model("Currency",currencySchema)