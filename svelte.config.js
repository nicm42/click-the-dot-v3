const autoPreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: autoPreprocess({
    scss: { includePaths: ['./src/styles'], data: '@import "./src/styles";' },
    postcss: { plugins: [require('autoprefixer')] }
  }),
};