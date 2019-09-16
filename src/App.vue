<template>
  <b-container fluid id="app">
    
    <HeaderBar />
    <AccountsList />

  </b-container>
</template>

<script>
import HeaderBar from './components/HeaderBar'
import AccountsList from './components/AccountsList'

export default {
  name: 'app',
  components: {
    HeaderBar, AccountsList
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/index.scss';
</style>
