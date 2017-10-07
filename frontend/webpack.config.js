const webpack = require("webpack");
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

var OUT_DIR = path.resolve(__dirname, "public");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
    devtool: "eval-source-map",
    entry: path.resolve(SRC_DIR, 'index.js'),
    output: {filename: 'script.js', path: OUT_DIR},
    module: {
        loaders: [
            {test: /\.jsx?$/, include: SRC_DIR, loader: "babel-loader"},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader!postcss-loader!sass-loader"
            })}
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

            "Input": "ryans-react-repository/dist/Input",
            "Navbar": "ryans-react-repository/dist/Navbar",
            "Button": "ryans-react-repository/dist/Button",
            "Form": "ryans-react-repository/dist/Form",
            "Card": "ryans-react-repository/dist/Card",

            "Config": path.resolve(SRC_DIR, 'config.json'),
            "Actions": path.resolve(SRC_DIR, 'actions.js')
        }),
        new ExtractTextPlugin("style.css")
    ]
};
