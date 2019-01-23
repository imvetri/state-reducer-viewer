const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});
const path = require("path");

module.exports = {
    devtool: 'inline-source-map',
    output: { 
        path: path.resolve(__dirname),  
        filename: 'main.js'                     // generated ./Project1/dist/js/out.js
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    
                    {
                        "loader": "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                          modules: true,
                          importLoaders: 1,
                          localIdentName: "[name]_[local]_[hash:base64]",
                          sourceMap: true
                        }
                      }
                ]
            }
        ]
    },
    plugins: [htmlWebpackPlugin]
};