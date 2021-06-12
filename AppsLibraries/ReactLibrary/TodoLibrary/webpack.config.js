const path = require("path")
// const webpack = require("webpack")
const pkg = require('./package.json');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const libraryName= pkg.name;

module.exports = {
    mode: "production",
    entry: path.join(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "@magicianred/todo-react-ui-library.js",  
        library: libraryName,      
        libraryTarget: "umd",      
        publicPath: "/dist/",      
        umdNamedDefine: true  
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            }, {
                test: /\.css/i,
                use: ["style-loader", "css-loader"]
            }, {
                test: /\.(png|jpg|jpeg|ico)$/i,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"],     
        alias: {
          'react': path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom')
        }  
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    externals: {      
        // Don't bundle react or react-dom      
        react: {          
            commonjs: "react",          
            commonjs2: "react",          
            amd: "React",          
            root: "React"      
        },      
        "react-dom": {          
            commonjs: "react-dom",          
            commonjs2: "react-dom",          
            amd: "ReactDOM",          
            root: "ReactDOM"      
        }  
    } 
}