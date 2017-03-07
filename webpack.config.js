var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loaders: ['react-hot-loader', 'babel-loader'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader'],
            include: path.join(__dirname, 'src')
        }]
    }
};