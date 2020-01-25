const express = require("express") //servidor
const morgan = require("morgan") //ver peticiones en terminal
const path = require("path")
const fileUpload = require("express-fileupload") //subir archivos al servidor
const jwt = require("jsonwebtoken")
require("./database") //conexion a la base de datos

//inicializar el servidor
const app = express()

//utilizar las variables de entorno
require("dotenv").config()

//modules
const ensureToken = require("./modules/ensureToken")

//configuraciones
app.set("port",process.env.PORT || 3000) //establecer puerto

//middlewares
app.use(morgan("dev")) //ver las peticiones al servidor por la consola
app.use(express.json()) //establecer la forma en como se realiza el intercambio de datos

app.use(fileUpload({
	useTempFiles: true
})) //permite subir archivos al servidor

//archivos estaticos
app.use(express.static(path.join(__dirname,"public")))

/*------------ROUTES----------------*/
app.use("/login",require("./routes/login.routes")) //Login
app.use("/admin",ensureToken,require("./routes/admin.routes")) //rutas de administrador
app.use("/client",require("./routes/client.routes")) //rutas de clientes

//redirigir las rutas no especificadas
app.get("*",(req,res) => {
	res.sendFile(path.join(__dirname,"public/index.html"))
})


//arrancar el servidor
app.listen(app.get("port"),() => {
	console.log("Server on port: " + app.get("port"))
})