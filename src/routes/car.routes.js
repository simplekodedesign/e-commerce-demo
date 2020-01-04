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
	const {product_id} = req.body
	const user_id = req.user_id

	const car = new Car({
		user_id,
		product_id
	})

	await car.save()

	next()
},show_car)

//eliminar del carrito de compra
router.post("/delete",async (req,res, next) => {
	const {product_id} = req.body
	const user_id = req.user_id

	await Car.remove({
		user_id,
		product_id
	})

	next()
},show_car)

//vaciar carrito de compra
router.post("/empty",async (req,res) => {
	const user_id = req.user_id
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
	const car = await Car.find({user_id})
	const currency = await Currency.find()

	let product
	let images
	let prices
	let response = [] 

	for(let c in car){
		if(car.hasOwnProperty(c)){
			product = await Product.findOne({
				_id: car[c].product_id
			})

			images = await Image.find({
				product_id: car[c].product_id
			},{
				url: true
			})

			prices = []
			for(let i in currency){
				if(currency.hasOwnProperty(i)){
					prices.push({
						currency: currency[i].currency,
						price: currency[i].value * product.price 
					})
				}
			}

			response.push({
				data: product,
				images,
				prices
			})
		}
	}

	res.json(response) 
}

module.exports = router