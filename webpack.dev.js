const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	devtool: 'inline-source-map',
	devServer: {
		// host : '192.168.1.6',
		port: 1338,
		host: '192.168.1.4',
		publicPath: '/',
		contentBase: './docs'
	}
});