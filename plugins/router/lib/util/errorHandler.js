/**
 * 提示信息处理工具
 */
const errorHandler = {
  pre: '[RNPlus Router] ',
  warn(str) {
    console.warn(this.pre + str);
  },
  noView(name) {
    this.warn(`页面 ${name} 未注册`);
  },
  noRoute(name) {
    this.warn(`页面 ${name} 不在路由历史中`);
  },
  noIndexView() {
    this.warn('native 未设置 view');
  },
  noAppName() {
    this.warn('请设置 React.RNPlus.defaults.appName 配置应用名');
  },
  noNavBarElem() {
    this.warn('导航栏还未准备好');
  },
};

export default errorHandler;
