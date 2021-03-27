module.exports = {
    module:{
        rules:[
            {
                test: /\.m?js$/, //vsechno s extension js buderesit babel
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react',
                            '@babel/preset-env'
                        ],
                        plugins:[
                            '@babel/plugin-transform-runtime'
                        ]
                    }
                }
            }
        ]
    }
};