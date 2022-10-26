const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const port = process.env.PORT || 3000;


module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src/index.js"),
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output:{
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "build")
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
            favicon: 'public/favicon.ico'
        }),
        new MiniCSSExtractPlugin(),
        new CopyWebpackPlugin({
            patterns:[
                {
                    from: path.resolve(__dirname,"src/assets/images") ,
                    to: path.resolve(__dirname, "build"),
                    context: "src"
                },
                {
                    from: path.resolve(__dirname,"src/assets/fonts") ,
                    to: path.resolve(__dirname, "build/static/media"),
                    context: "src"
                }
            ]
        })
    ],
    devServer:{
        static:{
            directory: path.resolve(__dirname, "build"),
        },
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true,
        compress: true,
        onListening: function(devServer){
            if(!devServer){
                throw new Error('webpack-dev-serve is not defined') 
            }
            console.log('Compiled Successfully');
            console.log('You can now view Project in the browser.');
            console.log('-------------------------------------------------')
            const port = devServer.server.address().port;
            console.log('Local: http://localhost:3000', port);
            console.log('-------------------------------------------------')
            console.log('Note that the development build is not optimized.')
            console.log('To create a production build, use npm run build. ')
            console.log('webpack compiled successfully')
            console.log('-------------------------------------------------')

        }
    },
    devtool: 'inline-source-map',
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "src"),
                exclude: path.resolve(__dirname, "node_modules"),
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [MiniCSSExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCSSExtractPlugin.loader,'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                type: "asset/resource"
            }
        ]
    },
    optimization: {
        splitChunks:{
            chunks: "all"
        }
    }
}