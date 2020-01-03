const {Router} = require("express")
const router = Router() //establecer router

router.use("/currency",require("./currency.routes")) //controlar las monedas en las que se presenta el precio

module.exports = router