const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: "./src/app/index.js",
	output: {
		path: __dirname + "/src/public",
		filename: "bundle.js"
	},
	plugins: [
		new HtmlWebpackPlugin({  
		  filename: 'index.html',
		  template: './src/public/index.html',
		  hash: true
		}),
		new MiniCSSExtractPlugin({
			filename: "main.css"
		})
	],
	module: {
		rules: [
			{
				use: "babel-loader",
				test: /\.js$/,
				exclude: /node_modules/
			},
			{ 
				test: /\.css$/, 
				loader: [
				  MiniCSSExtractPlugin.loader,
				  "css-loader"
				]
			}
		]
	}
}