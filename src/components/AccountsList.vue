<template>
  <b-container fluid>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="account in accounts"
        @click="open(account)"
        :key="account.id"
        :class="{'active': selectedAccount === account}"
      >{{account.type}}, {{account.name}}, {{account.balance}}</li>
    </ul>

    <div>
      <b-button @click="newAccount" variant="success">New</b-button>
    </div>

    <AccountDetails v-if="selectedAccount" :account=selectedAccount /> 

  </b-container>
</template>

<script>

import AccountDetails from '@/components/AccountDetails'

export default {
  name: "AccountsList",
  data() {
    return {
      accounts: [
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
      ],
      selectedAccount: undefined
    };
  },
  methods: {
    open(account) {
      this.selectedAccount = account;
    },

    newAccount() {

    }
  }, 
  components: {AccountDetails}
};
</script>