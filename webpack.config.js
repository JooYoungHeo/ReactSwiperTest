module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 7777,
    contentBase: __dirname + '/public/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015','react']
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          }
        ]
      }
    ]
  }
};
