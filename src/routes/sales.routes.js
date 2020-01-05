const {Router} = require("express")
const router = Router()

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

	for(let c in car){
		if(car.hasOwnProperty(c)){
			product = await Product.findOne({
				_id: car[c].product_id
			})

			sales_product = new SalesProduct({
				sales_id,
				name: product.name,
				quantity: car[c].quantity,
				price: product.price
			})

			await sales_product.save()
		}
	}

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
	let response = []

	for(let s in sales){
		if(sales.hasOwnProperty(s)){
			user = await User.findOne({
				_id: sales[s].user_id
			},{
				email: true
			})

			sales_product = await SalesProduct.find({
				sales_id: sales[s]._id
			})

			total = 0

			for(let i in sales_product)
				if(sales_product.hasOwnProperty(i))
					total += sales_product[i].quantity * sales_product[i].price

			response.push({
				sales_id: sales[s]._id,
				user: user.email,
				date: sales[s].date,
				total
			})
		}
	}

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

	const currency = await Currency.find()

	const sales_product = await SalesProduct.find({
		sales_id
	})
	

})

//validar usuario admin
async function ensureAdmin(req,res,next){
	const user_id = req.user_id

	if(!user_id)
		return res.json({
			status: -1,
			message: "No ha iniciado sesion"
		})
	
	const user = await User.findOne({_id: user_id})

	if(!user)
		return res.json({
			status: -2,
			message: "No se encontro el usuario"
		})

	const isAdmin = user.admin

	if(!isAdmin)
		return res.json({
			status: -3,
			message: "No tienes acceso a esta ruta"
		})

	next()
}

module.exports = router