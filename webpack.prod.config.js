const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        './frontend/index'
    ],
    module: {
        rules: [
            { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader' },
            { test: /\.(jpe?g|png|gif|svg)$/i, loaders: ['file?hash=sha512&digest=hex&name=[hash].[ext]',  'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']}
        ],
    },
    resolve: {
        extensions: ['.js', '.scss']
    },
    output: {
        path: path.join(__dirname, '/public'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: 'cheap-eval-source-map',
    devServer: {
        contentBase: './public',
        hot: true
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
