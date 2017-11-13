var webpack = require("webpack");
var path = require('path')

module.exports = {
	devtool: 'source-map',
	module: {
		loaders: [
			{ test: /\.json$/, loader: 'json-loader'},
			{ test: /\.coffee$/, loader: "coffee-loader" },
			{ test: /\.(xml|html|txt|md|svg|glsl)$/, loader: "raw-loader" },
			{ test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,loader: 'url-loader',options: {limit: 10000}}
		]
	},
	entry: {
		main: path.resolve(__dirname,"docs/source/main.coffee"),
	},
	resolve: {
		"alias": {
			"react" : "preact-compat",
			"react-dom": "preact-compat",
			"re": "preact",
			"intui": "./dist",
		}
	},
	output: {
		path: path.resolve(__dirname,'docs'),
		publicPath: path.resolve(__dirname,'docs'),
		filename: "[name].bundle.js"
	}
}