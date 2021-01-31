const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
	mode: "production",
	entry: "./src/js/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [],

	optimization: {
		minimize: true,
	},
};
