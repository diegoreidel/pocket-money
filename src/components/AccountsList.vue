<template>

  <b-card-body>

    <b-list-group>
      <b-list-group-item v-for="account in accounts" :key="account.id" @click="open(account)" :class="{'active': selectedAccount === account}">
        {{account.type}}, {{account.name}}, {{account.balance}}
      </b-list-group-item>
    </b-list-group>

    <b-card-body>
      <b-button @click="newAccount" variant="success">New</b-button>
    </b-card-body>
    <AccountDetails v-if="selectedAccount" :account=selectedAccount /> 
  </b-card-body>
</template>

<script>

import AccountDetails from '@/components/AccountDetails'
import AccountForm from '@/components/AccountForm'
import {mapState, mapActions} from 'vuex'

export default {
  name: "AccountsList",
  data() {
    return {
      selectedAccount: undefined
    };
  },
  created() {
    this.getAccounts();
  },

  methods: {
    ...mapActions(['getAccountsAction']),
    open(account) {
      this.selectedAccount = account;
    },

    newAccount() {
      this.$router.push('accounts/add');
    },

    async getAccounts() {
      await this.getAccountsAction();
    }
  }, 
  components: {AccountDetails},
  computed: {
    ...mapState(['accounts'])
  }
};
</script>