/*
 * @Author: your name
 * @Date: 2021-06-18 17:14:47
 * @LastEditTime: 2021-07-13 11:36:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \basic\config\proxy.ts
 */
/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/web/': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  test: {
    '/web/': {
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/web/': {
      target: 'http://localhost:3333',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
