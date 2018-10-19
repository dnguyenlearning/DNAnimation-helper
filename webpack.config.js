const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./DNA",
	output: {
		path: __dirname + "/dist",
		filename: "dna.js"
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
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebPackPlugin({ // development version
            title: "DNA plugin",
            template: "./index.html",
            filename: "./index.html",
        })
    ]
};
