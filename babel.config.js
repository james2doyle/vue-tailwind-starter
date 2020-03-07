module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      require('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        alias: {
          Assets: './src/assets',
          Components: './src/components',
        }
      }
    ]
  ]
};
