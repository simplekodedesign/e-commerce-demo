const {Router} = require("express")
const router = Router() //establecer router

/*------------------------------ADMIN ROUTES-----------------------------------------------*/
router.use("/currency",ensureAdmin,require("./currency.routes")) //controlar las monedas en las que se presenta el precio
router.use("/product",require("./product.routes")) //controlar los productos

//validar que el usuario sea administrador
function ensureAdmin(req,res,next){
	console.log(req.headers)

	const isAdmin = req.headers["is_admin"]
	
	if(!isAdmin)
		res.json({
			status: -1,
			message: "No tienes acceso a esta ruta"
		})

	next()
}

module.exports = router