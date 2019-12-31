const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = (dir) => path.join(__dirname, '../', dir)

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: resolve('src/index.tsx')
    },
    output: {
        publicPath: '/',
        filename: '[name].js',
        path: resolve('dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.scss', '.css', '.js', 'jsx'],
        alias: {
            '@': resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.less/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                        }
                    }
                ]
            },
            {
                test: /\.css/,
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            options: {},
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.svg/,
                use: [
                    {
                        loader: 'svg-inline-loader'
                    }
                ]
            }
        ]
    },
    devServer: {
        host: '0.0.0.0',
        port: 8003,
        open: true,
        disableHostCheck: true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: resolve('dist/index.html'),
            template: resolve('static/index.html'),
            chunks: ['app']
        })
    ]
}