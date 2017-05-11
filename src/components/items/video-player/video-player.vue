<template>
<d-player :video="data.video" :autoplay="data.autoplay"></d-player>
</template>

<script>
import VueDPlayer from 'vue-dplayer'

export default {
  name: 'video-player',
  props: { 'props': Object },
  components: {
    'd-player': VueDPlayer
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
