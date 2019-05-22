//footerStatus.js

const state = {
  //要设置的全局访问的state对象
  showHeader: true,
  changablePath: ''
  //要设置的初始属性值
};
const getters = {
  //实时监听state值的变化(最新状态)
  isShow(state) {
    //承载变化的showHeader的值
    return state.showHeader;
  },
  getPath() {
    //承载变化的changablePath的值
    return state.changablePath;
  },
  getKey() {
    //承载变化的changablePath的值  配合  header使用  只需要  路由的最后一个地址
    return state.changablePath.replace(/((\w*)\/)*(\w*)$/,'$3');
  }
};
const mutations = {
  show(state) {
    //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
    state.showHeader = true;
  },
  hide(state) {
    //同上
    state.showHeader = false;
  },
  newPath(state, path) {
    //同上，这里面的参数除了state之外还传了
    state.changablePath = path;
  }
};
const actions = {
  hideHeader(context) {
    //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
    context.commit("hide");
  },
  showHeader(context) {
    //同上注释
    context.commit("show");
  },
  setNewPath(context, path) {
    //同上注释，path为要变化的形参
    context.commit("newPath", path);
  }
};
export default {
  namespaced: true, //用于在全局引用此文里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
};
