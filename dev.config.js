module.exports = {
  entry: './index.js',
  module: {
  	loaders: [
      {
      	loader:  'babel-loader',
      	test: /\.js$/,
      	exclude: /node_modules/
      }
  	]
  },
  devServer: {
  	publicPath: '/assets',
  	filename: 'bundle.js',
  	host: '0.0.0.0',
  	port: 8088
  }
}