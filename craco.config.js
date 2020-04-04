const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@models': path.resolve(__dirname, 'src/models'),
      '@helpers': path.resolve(__dirname, 'src/shared/helpers'),
      '@router': path.resolve(__dirname, 'src/router')
    }
  },
};
