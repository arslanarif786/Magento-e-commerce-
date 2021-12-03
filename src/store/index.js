/// this is store file, basically store provides us ease
/// ease in the sense that, if any component or any page want to get or use some of the data that is
/// shared in the system, we use store folder for this problem or for the use of different states, getters, actions and mutations

import Vue from 'vue';
import Vuex from "vuex";
Vue.use(Vuex);

import state from "./state";
import * as getters from './getters';
import * as mutations from "./mutations";
import * as actions from "./actions";
export default new Vuex.Store({

  state,
  getters,
  mutations,
  actions,

});