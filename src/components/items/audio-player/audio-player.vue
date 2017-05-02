<template>
<a-player :music="data"></a-player>
</template>

<script>
import VueAplayer from 'vue-aplayer'

export default {
  name: 'audio-player',
  props: { 'props': Object },
  components: {
    'a-player': VueAplayer
  },
  computed: {
    data: function () {
      return this.props
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
