const {Router} = require("express")
const router = Router()

//modules
const ensureAdmin = require("../modules/ensureAdmin")

//models
const Product = require("../models/Product")
const Currency = require("../models/Currency")
const Image = require("../models/Image")
const User = require("../models/User")

//registrar producto
router.post("/add",ensureAdmin,async (req,res,next) => {
	const {name,description,quantity,price} = req.body
	const images = req.files
	let img

	//validar los datos necesarios  VERSION FINAL
	// if(!name || !description || !quantity || !price || !images)
	// 	return res.json({
	// 		status: -1,
	// 		message: "Debe rellenar todos los campos"
	// 	})

	// Versión de prueba

	if(!name || !description || !quantity || !price)
	return res.json({
		status: -1,
		message: "Debe rellenar todos los campos"
	})

	//crear el objeto producto
	const product = new Product({
		name,
		description,
		quantity,
		price
	})

	//guardar el producto
	await product.save()

	//guardar las imagenes del producto
	const product_id = product._id

	for(let key in images){
		if(images.hasOwnProperty(key)){
			img = new Image({
				product_id,
				url: "img/"+images[key].name
			})
			await img.save()
		}
	}

	next()
},show_products)

//mostrar los productos
router.get("/",show_products)

//modificar producto
router.post("/update",ensureAdmin,async (req,res,next) => {
	const {product_id,name,description,quantity,price} = req.body
	const images = req.files

	if(!name || !description || !quantity || !price || !images)
		return res.json({
			status: -1,
			message: "Debe rellenar todos los campos"
		})

	//eliminar imagenes viejas
	await Image.remove({product_id})

	//modificar el producto
	await Product.update({_id: product_id},{
		name,
		description,
		quantity,
		price
	})

	//guardar las nuevas imagenes
	for(let key in images){
		if(images.hasOwnProperty(key)){
			img = new Image({
				product_id,
				url: "img/"+images[key].name
			})
			await img.save()
		}
	}

	next()
},show_products)

//eliminar productos
router.post("/delete",ensureAdmin,async (req,res,next) => {
	const {product_id} = req.body

	await Image.remove({product_id})
	await Product.remove({_id: product_id})

	next()

},show_products)

//filtrar productos
router.post("/filter",async (req,res) => {
	const {name} = req.body

	if(!name)
		return res.json({
			status: -1,
			message: "Se esperaba el nombre del producto buscado"
		})

	const products = await Product.find({
		name: new RegExp(name)
	})

	const currencies = await Currency.find()

	let images
	let prices
	let response

	response = await Promise.all(products.map(async (product) => {
		images = await Image.find({product_id: product._id},{url: true})

		images = images.map(img => img.url)

		prices = currencies.map(currency => {
			return {
				currency: currency.currency,
				value: currency.value * product.price
			}
		})

		return {
			data: product,
			images,
			prices
		}
	}))

	res.json(response)
})

//listar productos
async function show_products (req,res,next) {
	const products = await Product.find()
	const currencies = await Currency.find()

	let images
	let prices
	let response

	response = await Promise.all(products.map(async (product) => {
		images = await Image.find({product_id: product._id},{url: true})

		images = images.map(img => img.url)

		prices = currencies.map(currency => {
			return {
				currency: currency.currency,
				value: currency.value * product.price
			}
		})

		return {
			data: product,
			images,
			prices
		}
	}))

	res.json(response)
}

module.exports = router