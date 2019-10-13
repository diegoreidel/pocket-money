<template>

  <b-card-body>

    <b-list-group>
      <b-list-group-item v-for="account in accounts" :key="account.id">
        <router-link :to="{name: 'account-details', params:{id: account.id}}">{{account.type}}, {{account.name}}, {{account.balance}}</router-link>
      </b-list-group-item>
    </b-list-group>

    <b-card-body>
      <b-button @click="newAccount" variant="success">New</b-button>
    </b-card-body>
   
  </b-card-body>
</template>

<script>

import AccountForm from '@/components/AccountForm'
import {mapState, mapActions} from 'vuex'

export default {
  name: "AccountsList",
  created() {
    this.getAccounts();
  },

  methods: {
    ...mapActions(['getAccountsAction']),
  
    newAccount() {
      this.$router.push('accounts/add');
    },

    async getAccounts() {
      await this.getAccountsAction();
    }
  }, 
  computed: {
    ...mapState(['accounts'])
  }
};
</script>