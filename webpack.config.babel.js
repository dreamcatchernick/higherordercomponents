import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin';
import path from 'path';

module.exports = {
    entry: './index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.css$/ ,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                    publicPath: '/dist'
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: 'file-loader?name=/images/[name].[ext]'
            },
            {
                test: /\.(svg|woff2|ttf|woff|eot)$/,
                use: 'file-loader?name=/fonts/[name].[ext]'
            }
        ]
    },
    devServer: {
        compress: true,
        stats: 'errors-only',
        open: true
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: true,
            hash: true
        }),
        new ExtractTextWebpackPlugin({
            filename: 'app.css',
            allChunks: true
        })
    ]
}
