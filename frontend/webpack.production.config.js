const  webpack = require("webpack");
const path = require('path');

var OUT_DIR = path.resolve(__dirname, "public/assets/js");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
    devtool: "source-map",
    entry: path.resolve(SRC_DIR, 'index.js'),
    output: {filename: 'script.js', path: OUT_DIR},
    module: {
        loaders: [
            {test: /\.jsx?$/, include: SRC_DIR, loader: "babel-loader"},
            {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
            "React": "react",
            "ReactDOM": "react-dom",
            "ReactRedux": "react-redux",
            "ReactRouter": "react-router",
            "ReactRouterRedux": "react-router-redux",
            "Redux": "redux",
            "Reselect": "reselect",
            "Popper": "popper.js",
            "lodash": "lodash",
            "moment": "moment",
            "numeral": "numeral",

            "Actions": path.resolve(SRC_DIR, 'actions.js')
        }),
        new webpack.DefinePlugin({"process.env": {"NODE_ENV": JSON.stringify("production")}}),
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
    ]
};
