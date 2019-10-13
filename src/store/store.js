import Vue from 'vue'
import Vuex from 'vuex'

import {fetchAccounts, fetchAccount} from '@/services/account.service.js'
import {GET_ACCOUNTS, GET_ACCOUNT} from '@/store/mutation-types'

Vue.use(Vuex)

const state = {
  accounts: [],
  account: {}
};
const mutations = {
  [GET_ACCOUNTS](state, accounts) {
    state.accounts = accounts;
  },
  [GET_ACCOUNT](state, account) {
    state.account = account;
  }
};
const actions = {
  async getAccountsAction({commit}) {
    const accounts = await fetchAccounts();
    commit(GET_ACCOUNTS, accounts);
  },
  async getAccountAction({commit}, id) {
    const account = await fetchAccount(id);
    commit(GET_ACCOUNT, account);
  }
};
const getters = {};

export default new Vuex.Store({
  state,
  mutations, 
  actions,
  getters
})
