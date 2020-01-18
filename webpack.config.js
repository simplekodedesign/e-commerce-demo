const path = require("path")

module.exports = {
	entry: "./src/app/index.js",
	output: {
		path: path.join(__dirname,"/src/public"),
		filename: "bundle.js",
		publicPath: "/"
	},
	module: {
		rules: [
			{
				use: "babel-loader",
				test: /\.js$/,
				exclude: /node_modules/
			},
			{ 
				test: /\.css$/, 
				use: ["style-loader","css-loader"]
			}
		]
	},
	devServer: {
		historyApiFallback: true
	}
}