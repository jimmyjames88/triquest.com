const { VueLoaderPlugin } = require('vue-loader');
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const path = require('path');

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
  entry: {
    main: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    // prerenderer
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, 'dist'),
      routes: prerenderRoutes
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.mjs', '.vue', '.json'],
  }
}
