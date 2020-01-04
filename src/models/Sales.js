const {Schema,model} = require("mongoose")
const User = model("User")

const salesSchema = new Schema({
	user_id: {
		type: Schema.ObjectId,
		ref: "User"
	},
	date: {
		type: String,
		required: true
	},
	total: {
		type: Number,
		required: true
	}
})

module.exports = model("Sales",salesSchema)