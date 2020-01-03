const {Router} = require("express")
const router = Router()

//modelos
const Product = require("../models/Product")
const Currency = require("../models/Currency")
const Image = require("../models/Image")

//registrar producto
router.post("/add",async (req,res,next) => {
	const {name,description,quantity,price} = req.body
	const images = req.files
	let img

	//validar los datos necesarios
	if(!name || !description || !quantity || !price || !images)
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
router.post("/update",async (req,res,next) => {
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
router.post("/delete",async (req,res,next) => {
	const {product_id} = req.body

	await Image.remove({product_id})
	await Product.remove({_id: product_id})

	next()

},show_products)

//listar productos
async function show_products (req,res,next) {
	const products = await Product.find()
	const currencies = await Currency.find()

	let img
	let imgs
	let prices
	let response = []

	for(let key in products){
		if(products.hasOwnProperty(key)){
			img = await Image.find({product_id: products[key]._id},{url: true})

			prices = []
			imgs = []

			for(let i in img)
				if(img.hasOwnProperty(i))
					imgs.push(img[i].url)

			for(let i in currencies)
				if(currencies.hasOwnProperty(i))
					prices.push({
						currency: currencies[i].currency,
						value: currencies[i].value * products[key].price
					})

			response.push({
				data: products[key],
				images: imgs,
				prices
			})
		}
	}

	res.json(response)
}

//validar que el usuario sea administrador
function ensureAdmin(req,res,next){
	const isAdmin = req.headers["isAdmin"]
	
	if(!isAdmin)
		res.json({
			status: -1,
			message: "No tienes acceso a esta ruta"
		})

	next()
}

module.exports = router