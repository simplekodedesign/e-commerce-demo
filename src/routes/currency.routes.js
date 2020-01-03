const {Router} = require("express")
const router = Router()

//importar modelos
const Currency = require("../models/Currency")

//añadir moneda
router.post("/add",async (req,res) => {
	const {currency,value} = req.body

	if(!currency || !value)
		return res.json({
			status: -1,
			message: "Debe rellenar todos los campos"
		})

	const newCurrency = new Currency({
		currency,
		value
	})

	await newCurrency.save()

	res.json(newCurrency)
})

//ver las monedas existentes
router.get("/",async (req,res) => {
	const currency = await Currency.find()
	res.json(currency)
})

//modificar moneda
router.post("/update",async (req,res) => {
	const {currency_id,currency,value} = req.body
	
	if(!currency_id || !currency || !value)
		return res.json({
			status: -1,
			message: "Debe rellenar todos los campos"
		})

	await Currency.update({_id: currency_id},{
		currency,
		value
	})

	res.json({
		status: 1,
		message: "Moneda Actualizada con exito"
	})
})

//elimiar moneda
router.post("/delete",async (req,res) => {
	const {currency_id} = req.body
	await Currency.remove({_id: currency_id})
	const currencies = await Currency.find()
	res.json(currencies)
})

module.exports = router