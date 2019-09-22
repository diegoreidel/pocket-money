<template>
  <div id="app">
    <b-card title="Card Title" no-body>
      <HeaderBar />
      <router-view/>
    </b-card>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'

export default {
  components: {HeaderBar}
}
</script>

<style lang="scss">
@import '@/assets/styles/index.scss';
</style>
