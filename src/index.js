const express = require("express") //servidor
const morgan = require("morgan") //ver peticiones en terminal
const path = require("path")
const fileUpload = require("express-fileupload") //subir archivos al servidor
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
app.use(fileUpload()) //permite subir archivos al servidor

//archivos estaticos
app.use(express.static(path.join(__dirname,"public")))

/*------------ROUTES----------------*/
app.use("/login",require("./routes/login.routes")) //Login
app.use("/admin",require("./routes/admin.routes")) //rutas de administrador


//asegurarse de que haya creado un token
function ensureToken(req,res,next){
	const bearerHeader = req.headers["autorization"]
	if(bearerHeader != undefined){
		const bearer = bearerHeader.split(" ")
		const bearerToken = bearer[1]
		req.token = bearerToken
		next()
	}else{
		res.json({
			status: -1,
			message: "No ha Iniciado Session"
		})
	}
}

//arrancar el servidor
app.listen(app.get("port"),() => {
	console.log("Server on port: " + app.get("port"))
})