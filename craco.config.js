const CracoLessPlugin = require('craco-less');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const path = require('path');
const _pathResolve = dir => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      '@': _pathResolve('src/'),
      '@assets': _pathResolve('src/assets'),
      '@theme': _pathResolve('src/theme'),
      '@components': _pathResolve('src/components'),
      '@tools': _pathResolve('src/tools'),
      '@constants': _pathResolve('src/constants'),
      '@services': _pathResolve('src/services'),
      '@apis': _pathResolve('src/services/apis'),
      '@store': _pathResolve('src/store'),
      '@hooks': _pathResolve('src/hooks'),
      '@types': _pathResolve('src/types'),
      '@layouts': _pathResolve('src/layouts'),
      '@views': _pathResolve('src/views'),
    },
    plugins: [
      new NodePolyfillPlugin()
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#06c',
              '@success-color': '#00bf69',
              '@info-color': '#3370ff',
              '@warning-color': '#f2a100',
              '@error-color': '#f05b5b',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};