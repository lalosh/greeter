import * as webpack from 'webpack';
import * as path from 'path';


export const nodeJSConfig: webpack.Configuration = {
    target: 'node',
    mode: 'production',
    entry: path.join(__dirname, '../src/index.ts'),
    output: {
        path: path.join(__dirname, '../dist/'),
        filename: 'index.js',
        library: 'GreeterLibrary',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'this',

    },
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                use: [
                    { loader: 'babel-loader' }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(ts)$/,
                use: [
                    { loader: 'ts-loader' }
                ],
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.BUILD_TARGET': JSON.stringify('NODE')
        })
    ],
    resolve: {
        extensions: ['.ts', '.js']
    },
    externals: {
        axios: {
            commonjs: 'axios',
            commonjs2: 'axios',
            amd: 'axios',
            root: 'axios',
        },
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: 'lodash',
        },
        immer: {
            commonjs: 'immer',
            commonjs2: 'immer',
            amd: 'immer',
            root: 'immer',
        },
    }
}
