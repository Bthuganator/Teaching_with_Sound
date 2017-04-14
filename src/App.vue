<template>
  <div id="app">
    <router-view name="navbar"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import './css/style.css'
export default {
  name: 'app'
}
</script>

<style>

</style>
