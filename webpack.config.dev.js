let webpack = require("webpack");
let path = require("path");
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	debug: true,
	noInfo: false,
	devTool: 'eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		path.join( __dirname, '/src/index.js')
	],
	target: 'web',
	output: {
		path: '/'
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.optimize\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorOptions: {
				discardComments: {
					removeAll: true
				}
			},
			canPrint: true
		}),
	],
	postcss: {},
	node:{
		net: 'empty',
		dns: 'empty'
	},
	module: {
		loaders: [{
				test: /\.js$/,
				include: path.join(__dirname, 'src'), 
				exclude: /(node_modules)/,
				loaders: ['react-hot', 'babel']
			},
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: "json-loader"
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!autoprefixer-loader',
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
			},
			{
				test: /bootstrap\/js\//,
				loader: 'imports?jQuery=jquery'
			},
			// Font Definitions
			{ test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff&name=../fonts/[name].[ext]' },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/vnd.ms-fontobject&name=../fonts/[name].[ext]' },
			{ test: /\.[ot]tf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream&name=../fonts/[name].[ext]' },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml&name=../fonts/[name].[ext]' },
			//Images
			{
				test: /\.(jpg|jpeg|gif|png)$/,
				exclude: /(node_modules)/,
				loader: "file-loader?name=../images/[name].[ext]"
			}
		]
	}
};