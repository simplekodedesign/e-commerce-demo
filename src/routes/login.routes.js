const { Router } = require("express")
const router = Router() //establecer router
const jwt = require("jsonwebtoken")
require("dotenv").config() //utilizar las variables de entorno

//importar modelos
const User = require("../models/User")

//registrar usuario normal
router.post("/signup",async (req,res) => {
	const {email,password} = req.body

	if(!email || !password)
		return res.json({
			status: -1,
			message: "Debe rellenar todos los campos"
		})

	//crear instancia de usuario
	const user = new User({
		email,
		password
	})

	//cifrar contraseña
	user.password = await user.encryptPassword(user.password)

	//guardar el usuario en DB
	await user.save()

	//generar token
	const token = jwt.sign({id: user._id},process.env.SECRET_KEY,{
		expiresIn: 60 * 60 * 24
	})

	//todo bien
	res.json({
		auth: true,
		token
	})
})

//registrar usuario admin
router.post("/signup/admin",async (req,res) => {
	const {email,password} = req.body

	if(!email || !password)
		return res.json({
			status: -1,
			message: "Debe rellenar todos los campos"
		})

	//crear instancia de usuario
	const user = new User({
		email,
		password,
		admin: true
	})

	//cifrar contraseña
	user.password = await user.encryptPassword(user.password)

	//guardar el usuario en DB
	await user.save()

	//generar token
	const token = jwt.sign({id: user._id},process.env.SECRET_KEY,{
		expiresIn: 60 * 60 * 24
	})

	//todo bien
	res.json({
		auth: true,
		token
	})
})

//loguear usuario
router.post("/",async (req,res) => {
	const {email,password} = req.body

	if(!email || !password)
		return res.json({
			status: -1,
			message: "Debe rellenar todos los campos"
		})

	const user = await User.findOne({email}) //buscar al usuario
	
	//en caso de no encontrar al usuario
	if(!user)
		return res.json({
			status: -2,
			message: "No se encontro al usuario"
		})

	//validar la contrasella
	const verify = await user.validatePassword(password)

	if(!verify)
		return res.json({
			status: -3,
			message: "Contraseña Incorrecta"
		})

	//generar token
	const token = jwt.sign({id: user._id},process.env.SECRET_KEY,{
		expiresIn: 60 * 60 * 24
	})

	//saber si el usuario es admin
	const isAdmin = user.admin

	//todo bien
	res.json({
		auth: true,
		token,
		isAdmin
	})
})

module.exports = router