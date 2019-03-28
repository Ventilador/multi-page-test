module.exports = {
    chainWebpack: config => config.resolve.set('symlinks', false),
    configureWebpack: {
        output: {
            libraryExport: 'default'
        },
        optimization: {
            minimize: false
        }
    }
}