const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
      path: __dirname,
      filename: './release/bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'})
    ],
    module: {
        rules:[
            {
                test: /\.js|jsx$/, use:
                {
                    loader: 'babel-loader', options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],  // 支持es7的装饰器的写法 要放在前面
                            '@babel/plugin-proposal-class-properties',       // 支持es7的类的写法 
                        ]
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './release'),
        open: true,
        port: 9000
    }
  };
  