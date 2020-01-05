//modulo para utilizar bases de datos Mongo
const mongoose = require("mongoose")

//utilizar las variables de entorno
require("dotenv").config()

//establecer conexion a la base de datos
mongoose.connect(process.env.URL_DATABASE,{
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
})
	.then(db => console.log("DB Connected"))
	.catch(err => console.log("Something Wrong " + err))