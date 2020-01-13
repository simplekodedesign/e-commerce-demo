const {Router} = require("express")
const router = Router() //establecer router

//modules
const ensureAdmin = require("../modules/ensureAdmin")

/*------------------------------ADMIN ROUTES-----------------------------------------------*/
router.use("/currency",ensureAdmin,require("./currency.routes")) //controlar las monedas en las que se presenta el precio
router.use("/product",require("./product.routes")) //controlar los productos
router.use("/sales",require("./sales.routes")) //ver las ventas

module.exports = router