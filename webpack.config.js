const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ()=>{
    return {
        entry: ['./src/index.js'],
        output: {
            filename: "index.js"
        },
        module:{
            rules:[
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        }
                    }
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },

            ]
        },

        plugins: [new HtmlWebpackPlugin({template: __dirname+"/src/index.html", inject: 'body'})],

    }
}