// only use these plugins when in production
const productionPlugins = process.env.NODE_ENV === 'production' ? [
  require('@fullhuman/postcss-purgecss')({
    // Specify the paths to all of the "tokens" in your project
    content: [
      './public/index.html',
      './src/**/*.vue',
      './src/styles/style.css',
    ],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
  }),
  require('cssnano')({
    preset: 'default',
  }),
] : [];

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    ...productionPlugins,
  ]
};
