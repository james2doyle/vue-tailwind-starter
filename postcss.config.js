// only use these plugins when in production
const productionPlugins = process.env.NODE_ENV === 'production' ? [
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
