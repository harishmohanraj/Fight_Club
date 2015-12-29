module.exports = {
	entry: "./js/app.js",
	output: {
		filename: "public/js/bundle.js"
	},
	module: {
		loaders: [
			{
				exclude: /(node_modules|app-server.js)/,
                test:   /\.js$/,
				loader: 'babel'
			}
		]
	}
};