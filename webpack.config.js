module.exports = {
    entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
    module: {
      rules: [
        {
          test: /\.js[x]?$/,
          exclude: /node_modules/,
loader: "babel-loader",
          options: {
            presets: ['react', 'es2015', 'env'],
            plugins: ['transform-class-properties']
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
      }
      ]
    }
  };