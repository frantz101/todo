const path = require('path')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output:   {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules: [
      {
        test: /\.(hbs|handlebars)$/,
        use: 'handlebars-loader'
      },
      {
        test: /\.less$/,
        use: 'less-loader'
      }

    ]
  }

};
