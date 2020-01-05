const {Router} = require("express")
const router = Router()

/*---------------------CLIENT ROUTES------------------------*/
router.use("/car",require("./car.routes")) //controlar el carrito de compras
router.use("/product",require("./product.routes")) //ver los productos 
router.use("/sales",require("./sales.routes")) //guardar las ventas que realice el cliente

module.exports = router