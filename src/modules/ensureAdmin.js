//validar usuario admin
const ensureAdmin = async function (req,res,next){
	const user_id = req.user_id

	if(!user_id)
		return res.json({
			status: -1,
			message: "No ha iniciado sesion"
		})
	
	const user = await User.findOne({_id: user_id})

	if(!user)
		return res.json({
			status: -2,
			message: "No se encontro el usuario"
		})

	const isAdmin = user.admin

	if(!isAdmin)
		return res.json({
			status: -3,
			message: "No tienes acceso a esta ruta"
		})

	next()
}

module.exports = ensureAdmin