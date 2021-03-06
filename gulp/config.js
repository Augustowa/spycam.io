var dest = "./dist";
var src = './src';

module.exports = {
  server: {
    settings: {
      root: dest,
      host: 'localhost',
      port: 8080,
      livereload: {
        port: 35929
      }
    }
  },
  sass: {
    src: src + "/styles/**/*.{sass,scss,css}",
    dest: dest + "/styles",
    settings: {
      indentedSyntax: false, // Enable .sass syntax?
      imagePath: '/images' // Used by the image-url helper
    }
  },
  browserify: {
    settings: {
      transform: ['reactify', '6to5ify']
    },
    src: src + '/js/index.jsx',
    dest: dest + '/js',
    outputName: 'index.js',
  },
  html: {
    src: 'src/index.html',
    dest: dest
  },
  ini: {
    src: src + '/config/**/*',
    dest: dest + '/config'
  },
  watch: {
    src: 'src/**/*.*',
    tasks: ['build']
  }
};
