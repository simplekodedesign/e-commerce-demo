const { Schema,model } = require("mongoose")
const bcrypt = require("bcryptjs") //cifrar password

//esquema de usuario
const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
		unique: true
	},
	admin: {
		type: Boolean,
		required: true,
		default: false
	}
})

//encriptar password
userSchema.methods.encryptPassword = async (pass) => {
	const salt = await bcrypt.genSalt(10)
	return bcrypt.hash(pass,salt)
}

//validar password
userSchema.methods.validatePassword = function(pass){
	return bcrypt.compare(pass,this.password)
}

//exportar esquema
module.exports = model("User",userSchema)