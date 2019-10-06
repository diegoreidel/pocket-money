import Vue from 'vue'
import Vuex from 'vuex'

import {fetchAccounts} from '@/services/account.service.js'
import {GET_HEROES} from '@/store/mutation-types'

Vue.use(Vuex)

const state = {
  accounts: []
};
const mutations = {
  [GET_HEROES](state, accounts) {
    state.accounts = accounts;
  }
};
const actions = {
  async getAccountsAction({commit}) {
    const accounts = await fetchAccounts();
    commit(GET_HEROES, accounts);
  }
};
const getters = {};

export default new Vuex.Store({
  state,
  mutations, 
  actions,
  getters
})
