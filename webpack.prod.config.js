var webpack = require('webpack');
var path = require('path');
var NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules');

var loaders = {
    loaders: [
        {
            test    : /\.ts[x]?$/,
            exclude : NODE_MODULES_PATH,
            loader  : 'awesome-typescript-loader'
        }
    ],
    noParse: /\.min\.js$/
};

var resolve = {
    extensions    : ["", ".webpack.js", ".web.js", ".js", ".ts", ".tsx"]
};

var output = {
    path          : __dirname + '/dist',
    filename      : '[name].min.js',
    libraryTarget : 'umd',
    library       : '[name]',
    pathinfo      : true
};

module.exports = {
    context: __dirname,
    entry: {
        vidi : ['./src']
    },

    output: output,
    resolve: resolve,
    module: loaders
};
