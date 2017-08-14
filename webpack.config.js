const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        './frontend/index.js'
    ],
    module: {
        rules: [
            { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ , options: {presets: ['react', 'es2015']}},
            { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader!font-loader?format[]=truetype&format[]=woff&format[]=embedded-opentype'},
            { test: /\.(jpe?g|png|gif|svg)$/i, loaders: ['file-loader?hash=sha512&digest=hex&name=[hash].[ext]',  'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false']}
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
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
