var webpack = require('webpack');

var config = {
    context: __dirname+'/app',
    entry:'./index.js',
    devtool:'eval-source-map',
    output:{
        filename:'bundle.js',
        path: __dirname+'/app'
    },
    plugins:[
        new webpack.DefinePlugin({
            ON_TEST:process.env.NODE_ENV === 'test'
        })
    ],
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
            {test: /\.styl$/, loader: 'style!css!stylus', exclude: /node_modules/},
            {test: /\.js$/, loader: 'ng-annotate!babel', exclude: /node_modules/},
            {test: /\.html$/, loader: 'raw', exclude: /node_modules/}
        ]
    }
};

if(process.env.NODE_ENV === 'production'){
    config.output.path = __dirname+'/dist';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.devtool = 'source-map';
}

module .exports = config;