<template>
    <div class="container">
        <!--<div class="credits-placeholder"></div>-->
        <div class="row">
            <div class="col-lg-3">
                <h2>Sound Credits</h2>
            </div>
            <div class="col-lg-9 credits-well">
                <div class="row" v-for="sound in sounds">
                    
                        <div class="col-md-2">
                            {{sound.attribution}}
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'credits-section',
  props: ['sounds']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
