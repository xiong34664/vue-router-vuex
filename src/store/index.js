import Vue from "vue";
import Vuex from "vuex";
import footerStatus from "./modules/footerStatus";
import headerStatus from "./modules/headerStatus";
import collection from "./modules/collection";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    footerStatus,
    headerStatus,
    collection
  }
});
