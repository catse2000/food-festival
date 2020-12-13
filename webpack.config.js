const path = require('path');
const webpack = require("webpack");

module.exports = {
    entry: './assets/js/script.js', // enter files that need to be bundled
    output: { //tell webpack where bundled files will go
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ],
    mode: 'development' //define what mode this will run in
};