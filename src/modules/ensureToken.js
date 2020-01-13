//asegurarse de que haya creado un token
const ensureToken = function (req,res,next){
	console.log(req.headers)
	const bearerHeader = req.headers["authorization"]
	if(bearerHeader != undefined){
		const bearer = bearerHeader.split(" ")
		const bearerToken = bearer[1]
		req.token = bearerToken

		//decifrar el token
		const decoded = jwt.verify(req.token,process.env.SECRET_KEY)
		
		//guardar el id del usuario para compartirlo con las otras rutas
		req.user_id = decoded.id
		
		next()
	}else{
		res.json({
			status: -1,
			message: "No ha Iniciado Session"
		})
	}
}

module.exports = ensureToken