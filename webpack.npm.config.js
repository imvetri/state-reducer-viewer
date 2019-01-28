module.exports = {
    devtool: 'inline-source-map',
    entry: {
        entry: __dirname + '/dist/StateReducerViewer.js'
    },
    output: {
        filename: 'StateReducerViewer.js'
    },
    mode: 'development',
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
    }
};