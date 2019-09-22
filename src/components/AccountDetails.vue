<template>
  <div>
    <b-form>
      <b-form-group id="type-group" label="Type" label-for="type">
        <b-form-input id="type" v-model="account.type" type="text" required placeholder="Account Type"></b-form-input>
      </b-form-group>
      <b-form-group id="name-group" label="Name" label-for="name">
        <b-form-input id="name" v-model="account.name" type="text" required placeholder="Account Name"></b-form-input>
      </b-form-group>
      <b-form-group id="balance-group" label="Balance" label-for="balance">
        <b-form-input id="balance" v-model="account.balance" type="number" required placeholder="Account Balance"></b-form-input>
      </b-form-group>
    </b-form>

    <ul class="list-group">
      <li class="list-group-item" v-for="entry in account.entries" :key="entry.id">
        <p>{{entry.description}}, {{entry.type}}, {{entry.value}}</p>
      </li>
    </ul>

  </div>
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