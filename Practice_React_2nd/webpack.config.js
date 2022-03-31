const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    compress: true,
    port: 9999,
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 앞 확장자 이름 상관없이 js가 걸리면 loader로 걸러걸러
        exclude: /node_modules/, // node_modules는 거른다 (거르기 제외)
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ],

  },
  plugins: [
    new HtmlWebPackPlugin({// 인스턴스를 만들어줘야 하기 때문에 new 붙임
      title: 'setup webpack & bable',
      template: 'index.html',
    })
  ]
}

//! 아 모르겠다 ? => 공식문서에 있다고 함