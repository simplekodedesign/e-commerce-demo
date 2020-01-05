const {Router} = require("express")
const router = Router() //establecer router

/*------------------------------ADMIN ROUTES-----------------------------------------------*/
router.use("/currency",ensureAdmin,require("./currency.routes")) //controlar las monedas en las que se presenta el precio
router.use("/product",require("./product.routes")) //controlar los productos

//validar que el usuario sea administrador
async function ensureAdmin(req,res,next){
	const user_id = req.user_id

	if(!user_id)
		return res.json({
			status: -1,
			message: "No ha iniciado sesion"
		})
	
	const user = User.find({_id: user_id})

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

module.exports = router