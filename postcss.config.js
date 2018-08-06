
const px2rem = require('postcss-plugin-px2rem');
module.exports = {
  plugins: [
    require('precss'),
    require('autoprefixer')({ browsers: ['last 10 versions'] }),
    px2rem({
      rootValue: 100,
      minPixelValue: 2,
    })
  ]
};