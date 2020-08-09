const withFonts = require('next-fonts');
const config = require('./config')

module.exports = withFonts({
    basePath: config.basePath
})