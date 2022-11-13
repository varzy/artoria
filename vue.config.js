const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: process.env.NODE_ENV === 'production',
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            'primary-color': '#1746A2',
            'border-radius-base': '4px',
          },
        },
      },
    },
  },
});
