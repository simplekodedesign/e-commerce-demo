const {Router} = require("express")
const router = Router()

//models
const Car = require("../models/Car")
const User = require("../models/User")
const Product = require("../models/Product")
const Image = require("../models/Image")
const Currency = require("../models/Currency")

//añadir al carrito de compra
router.post("/add",async (req,res, next) => {
	const {product_id,quantity} = req.body
	const user_id = req.user_id

	if(!product_id || !quantity)
		return res.json({
			status: -1,
			message: "Debe Rellenar todos los campos"
		})

	if(!user_id)
		return res.json({
			status: -2,
			message: "No ha iniciado sesion"
		})

	const car = new Car({
		user_id,
		product_id,
		quantity
	})

	await car.save()

	next()
},show_car)

//eliminar del carrito de compra
router.post("/delete",async (req,res, next) => {
	const {product_id} = req.body
	const user_id = req.user_id

	if(!product_id)
		return res.json({
			status: -1,
			message: "Se esperaba el id del producto"
		})

	if(!user_id)
		return res.json({
			status: -2,
			message: "No ha iniciado sesion"
		})

	await Car.remove({
		user_id,
		product_id
	})

	next()
},show_car)

//vaciar carrito de compra
router.post("/empty",async (req,res) => {
	const user_id = req.user_id

	if(!user_id)
		return res.json({
			status: -2,
			message: "No ha iniciado sesion"
		})

	await Car.remove({user_id})
	res.json({
		status: 1,
		message: "Carrito vacio"
	})
})

//mostrar los productos del carrio de compra
router.get("/",show_car)

//mostrar los productos que tiene el usuario en el carrito de compra
async function show_car (req,res) {
	const user_id = req.user_id

	if(!user_id)
		return res.json({
			status: -2,
			message: "No ha iniciado sesion"
		})

	const car = await Car.find({user_id})
	const currencies = await Currency.find()

	let product
	let images
	let prices
	let response

	response = await Promise.all(car.map(async (c) => {
		product = await Product.findOne({
			_id: c.product_id
		},{
			name: true,
			description: true,
			price: true
		})

		images = await Image.find({
			product_id: c.product_id
		},{
			url: true
		})

		prices = []

		prices.push({
			currency: "USD",
			price: product.price * c.quantity
		})

		await Promise.all(currencies.map(currency => {
			prices.push({
				currency: currency.currency,
				price: currency.value * product.price * c.quantity
			})
		}))

		return({
			data: product,
			quantity: c.quantity,
			images,
			prices
		})
	}))

	res.json(response) 
}

module.exports = router