<template>
<div>  

    <intro-section></intro-section>

    <!-- Page Content -->
    <span id="about"></span>
	<template v-for="(a, index) in about">    	
        <div class="content-section-a" v-if="index % 2">
             <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-sm-6">
                        <hr class="section-heading-spacer">
                        <div class="clearfix"></div>
                        <h2 class="section-heading" v-html="a.heading"></h2>
                        <p class="lead" v-html="a.body"></p>
                        <div v-if="index === 3">
                            <form class="paypalForm" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                            <input type="hidden" name="cmd" value="_xclick">
                            <input type="hidden" name="business" value="bretmarkowski@gmail.com">
                            <input type="hidden" name="lc" value="US">
                            <input type="hidden" name="item_name" value="Support Teaching with Sound">
                            <input type="hidden" name="item_number" value="TWS1">
                            <input type="hidden" name="button_subtype" value="services">
                            <input type="hidden" name="no_note" value="0">
                            <input type="hidden" name="currency_code" value="USD">
                            <input type="hidden" name="tax_rate" value="0.000">
                            <input type="hidden" name="shipping" value="0.00">
                            <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_LG.gif:NonHostedGuest">
                            <table>
                            <tr><td><input type="hidden" name="on0" value="Teaching with Sound Support"></td></tr><tr><td>
                            <select class="form-control" name="os0">
                                <option value="Helpful site">Helpful site $1.00 USD</option>
                                <option value="I want more">I want more $3.00 USD</option>
                                <option value="Make it great">Make it great $5.00 USD</option>
                            </select> </td></tr>
                            </table>
                            <input type="hidden" name="currency_code" value="USD">
                            <input type="hidden" name="option_select0" value="Helpful site">
                            <input type="hidden" name="option_amount0" value="1.00">
                            <input type="hidden" name="option_select1" value="I want more">
                            <input type="hidden" name="option_amount1" value="3.00">
                            <input type="hidden" name="option_select2" value="Make it great">
                            <input type="hidden" name="option_amount2" value="5.00">
                            <input type="hidden" name="option_index" value="0"> 
                            <p>                       
                                <button class="btn btn-default btn-g" name="submit" alt="PayPal - The safer, easier way to pay online!">Support Now</button>
                            </p>
                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-5 col-lg-offset-2 col-sm-6">
                        <img class="img-responsive" :src="a.image_url" alt="">
                    </div>
                </div>
    
            </div>
        </div>
        
        <div class="content-section-b" v-else>
             <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                        <hr class="section-heading-spacer">
                        <div class="clearfix"></div>
                        <h2 class="section-heading">{{a.heading}}</h2>
                        <p class="lead">{{a.body}}</p>
                    </div>
                    <div class="col-lg-5 col-sm-pull-6  col-sm-6">
                        <img class="img-responsive" :src="a.image_url" alt="">
                    </div>
                </div>
    
            </div>
        </div>        
    </template>	

    <span id="contact"></span>
    <contact-section></contact-section>
    <span id="credits"></span>        
    <credits-section :sounds="sounds"></credits-section>    
    </div>
</template>

<script>
import IntroSection from '../components/intro-section'
import ContactSection from '../components/contact-section'
import CreditsSection from '../components/credits-section'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    IntroSection,
    ContactSection,
    CreditsSection
  },
  computed: {
    ...mapGetters({
      db: 'db'
    })
  },
  firebase: function () {
    return {
      sounds: this.db.ref().child('sounds'),
      about: this.db.ref().child('about').orderByChild('sort')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
