const path = require('path');

module.exports = {
    entry: './app/static/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/static/dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'webpack-remove-debug',
                }
            }
        ]
    },
    mode: 'development'
};
