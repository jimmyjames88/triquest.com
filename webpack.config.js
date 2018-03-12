const path = require('path')
const webpack = require('webpack')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const prerenderRoutes = [
	'/',
	'/about',
	'/contacts-locations',
	'/safety',
	'/services',
	'/careers',
	'/careers/confirmation',
	'/mytriquest-software',
	'/services/3d-laser-scanning',
	'/services/api-653-tank-inspection',
	'/services/aut-corrosion-mapping',
	'/services/computed-digital-radiography',
	'/services/electromagnetic-3d-field-imaging',
	'/services/ferrite',
	'/services/gamma-radiography',
	'/services/guided-wave-ultrasonic',
	'/services/hardness',
	'/services/in-house-radiography',
	'/services/liquid-penetrant',
	'/services/magnetic-particle',
	'/services/optical-emission-spectroscopy-spark',
	'/services/phased-array-ultrasonic',
	'/services/pipeline-integrity',
	'/services/positive-material-identification',
	'/services/rope-access-inspection',
	'/services/time-flight-diffraction',
	'/services/ultrasonic',
	'/services/visual-inspection',
	'/services/xray-radiography',
	'/services/xray-radiography'
]


module.exports = {

  entry: ['./src/main.js', './src/sass/main.scss'],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
	contentBase: path.join(__dirname, "dist")
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
	new CopyWebpackPlugin([
		{
			from: 'src/assets',
			to: 'assets'
		},
		{
			from: 'src/data',
			to: 'data'
		}
	]),
    new webpack.optimize.UglifyJsPlugin({
      //sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
  	}),
	new HtmlWebpackPlugin({
		template: 'src/index.html',
		inject: false
		//filename: path.resolve(__dirname, 'dist/index.html')
	}),
	// prerenderer
	new PrerenderSpaPlugin(
		path.join(__dirname, 'dist'), prerenderRoutes, {
			captureAfterTime: 3000,
			ignoreJSErrors: true,

			// postProcessHtml(context){
			// 	return '<title>Hello world</title>';
			// }
		})
	])
}
