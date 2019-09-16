<template>
    <b-container fluid>
      <input type="text" v-model="account.name" />
      <input type="text" v-model="account.type" />
      <input type="number" v-model="account.balance" />
      <ul class="list-group">
        <li class="list-group-item" v-for="entry in account.entries" :key="entry.id">
          <p>{{entry.description}}, {{entry.type}}, {{entry.value}}</p>
        </li>
      </ul>
    </b-container>
</template>

<script>
export default {
    name: 'AccountDetails',
    props: {
        account: {
            type: Object,
            default: () => {}
        }
    }
}
</script>