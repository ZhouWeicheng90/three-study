module.exports = {
    configureWebpack: {
        devServer: {
            port: 3369
        },

    },
    css: {
        loaderOptions: {
            less: {
                lessOptions:{
                    javascriptEnabled: true
                }
                
            }
        }
    },
}