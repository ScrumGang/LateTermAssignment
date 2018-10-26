const HTMLWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: './src/client/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebPackPlugin ({
            template: "./src/client/index.html"
        })
    ],
    devServer: {
        port: 3000,
        open: true,
        proxy: {
            "/api": "http://localhost:8080"
        }
    },
    module: {
        rules: [
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }]
    }
}
