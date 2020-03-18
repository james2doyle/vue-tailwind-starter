// https://cli.vuejs.org/config/#configuration-reference
const package = require('./package.json');

process.env.VUE_APP_VERSION = package.version;

const repoName = package.repository.url.match(/\/\w+\/(.*?)\.git$/i)[1];

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/',
  pwa: {
    themeColor: '#edf2f7',
    msTileColor: '#1a202c',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
  }
};
