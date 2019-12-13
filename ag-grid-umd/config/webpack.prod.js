const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false
                    }
                },
                extractComments: false
            })
        ],
    },
    entry: path.resolve(__dirname, "../src/main.js"),
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: 'bundle.umd.js',
        library: ["agGrid"],
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('cssnano')({
                                    preset: ['default', {
                                        discardComments: {
                                            removeAll: true,
                                        },
                                    }]
                                })
                            ]
                        }
                    }
                ]
            }
        ]
    }
};
