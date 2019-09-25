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

export default {
  name: "AccountsList",
  data() {
    return {
      accounts: [],
      selectedAccount: undefined
    };
  },
  created() {
    this.getAccounts();
  },

  methods: {
    open(account) {
      this.selectedAccount = account;
    },

    newAccount() {
      this.$router.push('accounts/add');
    },

    getAccounts() {
      this.accounts = [
        {
          id: 1,
          name: "Account1",
          type: "Type1",
          balance: -123.0,
          entries: [
            {
              id: "entry1",
              description: "Food and beverages",
              type: "Supermarket",
              value: -12
            },
            {
              id: "entry2",
              description: "God of War",
              type: " Entertainment",
              value: -40
            }
          ]
        },
        {
          id: 2,
          name: "Account2",
          type: "Type2",
          balance: 456.0,
          entries: [
            {
              id: "entry3",
              description: "Income 1",
              type: "Income",
              value: 123
            },
            {
              id: "entry4",
              description: "Income 2",
              type: " Entertainment",
              value: 456
            }
          ]
        }
      ]
    }
  }, 
  components: {AccountDetails, AccountForm}
};
</script>