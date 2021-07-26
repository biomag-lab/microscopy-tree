const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const WebpackBar = require('webpackbar');

module.exports = {
	context: __dirname,
	entry: './app.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'app.js'
	},
	resolve: { modules: [path.resolve(__dirname), "node_modules"] },
	optimization: {
		minimizer: [
			new TerserPlugin(),
			new OptimizeCSSAssetsPlugin({})
		]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}, {
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			},
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"]
            },
            {
		        test: /\.s[ac]ss$/i,
		        use: [
		          // Creates `style` nodes from JS strings
		          //"style-loader",
		          // Translates CSS into CommonJS
		          "css-loader",
		          // Compiles Sass to CSS
		          "sass-loader",
		        ],
		      },
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			favicon: 'icon.png',
			template: 'index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'app.css'
		}),
		new WebpackBar()
	]
};