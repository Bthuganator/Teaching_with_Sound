<template>
  <!-- Footer --><footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="list-inline">
                        <li>
                            <router-link to="/">Home</router-link>
                        </li>
                        <li class="footer-menu-divider">&sdot;</li>
                        <li>
                            <router-link to="/Sound-Board">Soundboard</router-link>
                        </li>
                        <li class="footer-menu-divider">&sdot;</li>
                        <li>                            
                            <router-link to="/#about">About</router-link>
                        </li>
                        <li class="footer-menu-divider">&sdot;</li>
                        <li>
                            <router-link to="/#contact">Contact</router-link>
                        </li>
                        <li class="footer-menu-divider">&sdot;</li>
                        <li>
                            <router-link to="/#credits">Credits</router-link>
                        </li>
                    </ul>
                    <p class="copyright text-muted small">Teaching with Sound</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
