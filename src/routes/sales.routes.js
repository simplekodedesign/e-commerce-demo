const {Router} = require("express")
const router = Router()

//modules
const ensureAdmin = require("../modules/ensureAdmin")

//models
const Sales = require("../models/Sales")
const SalesProduct = require("../models/SalesProduct")
const User = require("../models/User")
const Car = require("../models/Car")
const Product = require("../models/Product")
const Currency = require("../models/Currency")

//añadir a ventas
router.post("/add",async (req,res) => {
	const user_id = req.user_id

	if(!user_id)
		return res.json({
			status: -1,
			message: "No ha iniciado sesion"
		})
	
	let date = new Date()

	date = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear()

	const sales = new Sales({
		user_id,
		date
	})

	await sales.save()

	const sales_id = sales._id
	const car = await Car.find({user_id})
	let sales_product
	let product

	await Promise.all(car.map(async (c) => {
		product = await Product.findOne({
			_id: c.product_id
		})

		sales_product = new SalesProduct({
			sales_id,
			name: product.name,
			quantity: c.quantity,
			price: product.price
		})

		await sales_product.save()
	}))

	res.json({
		status: 1,
		message: "Venta Exitosa"
	})
})

//mostrar las ventas
router.get("/",ensureAdmin,async (req,res) => {
	const sales = await Sales.find()

	let user
	let sales_product
	let total
	let response

	response = await Promise.all(sales.map(async (sale) => {
		user = await User.findOne({
			_id: sale.user_id
		},{
			email: true
		})

		sales_product = await SalesProduct.find({
			sales_id: sale._id
		})

		total = 0

		sales_product.map(product => {
			total += product.quantity * product.price
		})

		return {
			sales_id: sale._id,
			user: user.email,
			date: sale.date,
			total
		}
	}))

	res.json(response)
})

//buscar los datos de una venta
router.post("/find",ensureAdmin,async (req,res) => {
	const {sales_id} = req.body

	if(!sales_id)
		return res.json({
			status: -1,
			message: "Se esperaba el id de la venta buscada"
		})

	const sale = await Sales.findOne({
		_id: sales_id
	})

	const currencies = await Currency.find()

	const user = await User.findOne({
		_id: sale.user_id
	})

	const sales_product = await SalesProduct.find({
		sales_id
	})

	let products
	let total = 0
	let prices
	let price

	products = await Promise.all(sales_product.map(async (product) => {
		prices = []

		prices.push({
			currency: "USD",
			value: sales_product[i].quantity * sales_product[i].price
		})

		total += sales_product[i].quantity * sales_product[i].price

		await Promise.all(currencies.map(currency => {
			prices.push({
				currency: currency.currency,
				value: product.quantity * product.price * currency.value
			})
		}))

		return {
			name: product.name,
			prices
		}
	}))

	let totals = []

	totals.push({
		currency: "USD",
		value: total
	})

	await Promise.all(currencies.map(currency => {
		totals.push({
			currency: currency.currency,
			value: total * currency.value
		})
	}))

	const response = {
		user: user.email,
		date: sale.date,
		products,
		totals
	}

	res.json(response)

})

module.exports = router