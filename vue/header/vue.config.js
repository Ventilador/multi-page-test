module.exports = {
    configureWebpack: {
        chainWebpack: config => config.resolve.set('symlinks', false),
        output: {
            libraryExport: 'default'
        },
        optimization: {
            minimize: false
        }
    }
}