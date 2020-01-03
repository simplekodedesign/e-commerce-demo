const {Router} = require("express")
const router = Router() //establecer router

router.use("/currency",require("./currency.routes")) //controlar las monedas en las que se presenta el precio
router.use("/product",require("./product.routes")) //controlar los productos

module.exports = router