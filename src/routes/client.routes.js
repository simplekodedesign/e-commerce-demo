const {Router} = require("express")
const router = Router()

//models
const ensureToken = require("../modules/ensureToken")

/*---------------------CLIENT ROUTES------------------------*/
router.use("/car",ensureToken,require("./car.routes")) //controlar el carrito de compras
router.use("/product",require("./product.routes")) //ver los productos 
router.use("/sales",ensureToken,require("./sales.routes")) //guardar las ventas que realice el cliente

module.exports = router