module.exports = {

  entry: './src/',  // <== this equivalent to './src/index.js' since entry point will be looking for default [index] file'
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
  	publicPath: '/',   
  	filename: 'bundle.js',  // located here => 'localhost:<port>/bundle.js'
  	host: '0.0.0.0',
  	port: 8088
  }
}