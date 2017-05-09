<template>
  <div id="app">
    <router-view name="navbar"></router-view>
    <router-view v-if="user !== null"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import './css/style.css'
import { mapState } from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style>

</style>
