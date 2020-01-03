const express = require("express") //servidor
const morgan = require("morgan") //ver peticiones en terminal
const path = require("path")
require("./database") //conexion a la base de datos

//inicializar el servidor
const app = express()

//utilizar las variables de entorno
require("dotenv").config()

//configuraciones
app.set("port",process.env.PORT || 3000) //establecer puerto

//middlewares
app.use(morgan("dev")) //ver las peticiones al servidor por la consola
app.use(express.json()) //establecer la forma en como se realiza el intercambio de datos

//archivos estaticos
app.use(express.static(path.join(__dirname,"public")))

/*------------ROUTES----------------*/
app.use("/login",require("./routes/login.routes")) //Login

//arrancar el servidor
app.listen(app.get("port"),() => {
	console.log("Server on port: " + app.get("port"))
})