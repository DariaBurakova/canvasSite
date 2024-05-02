<script setup>
import { useFooter } from '@/stores/footer.js'
import ImgTag from '@/components/UI/ImgTag.vue'
import { useContacts } from '@/stores/contacts.js'
import SubscribeList from '@/components/UI/SubscribeList.vue'

const {footerLogo, info, footerLinks, copyright, terms, policy, copyrightMenu} = useFooter();
const {phone, email} = useContacts();
</script>

<template>
  <footer id="footer" class="dark">
    <div class="container">
      <div class="footer-widgets-wrap">
        <div class="row">
          <div class="col-lg-9">
            <div class="widget clearfix">
			<ImgTag :alt="footerLogo.alt" :src="footerLogo.src" class="alignleft" style="margin-top: 8px; padding-right: 18px; border-right: 1px solid #4A4A4A;"/>

              <p v-html="info"></p>

              <div class="line" style="margin: 30px 0;"></div>

              <div class="row col-mb-30">
                <div
	                v-for="(item, index) in footerLinks"
	                :key="index"
	                class="col-lg-3 col-6 widget_links"
                >
                  <ul>
                    <li v-for="(link, index) in item" :key="index">
	                    <RouterLink :to="link.href">
		                    {{ link.text }}
	                    </RouterLink>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          <div class="col-lg-3 mt-5 mt-lg-0">
            <div class="widget clearfix">

              <div class="row col-mb-30">
                <div class="col-12">
                  <div class="footer-big-contacts">
                    <span>Call Us:</span>
	                  {{ phone }}
                  </div>
                </div>

                <div class="col-12">
                  <div class="footer-big-contacts">
                    <span>Send an Email:</span>
	                  {{ email }}
                  </div>
                </div>
              </div>

            </div>

             <SubscribeList/>
          </div>
        </div>
      </div>
    </div>

	  <div id="copyrights">
		  <div class="container">

			  <div class="row justify-content-between col-mb-30">
				  <div class="col-12 col-md-auto text-center text-md-left"  >
					  <p style="margin-bottom: 0" v-html="copyright"></p>
					  <div class="copyright-links"><RouterLink :to="terms.href">{{ terms.name }}</RouterLink> / <RouterLink :to="policy.href">{{ policy.name }}</RouterLink></div>
				  </div>

				  <div class="col-12 col-md-auto text-center text-md-right">
					  <div class="copyrights-menu copyright-links clearfix">
						  <RouterLink :to="copyrightMenu[0].href">{{ copyrightMenu[0].name }}</RouterLink>/
						  <RouterLink :to="copyrightMenu[1].href">{{ copyrightMenu[1].name }}</RouterLink>/
						  <RouterLink :to="copyrightMenu[2].href">{{ copyrightMenu[2].name }}</RouterLink>/
						  <RouterLink :to="copyrightMenu[3].href">{{ copyrightMenu[3].name }}</RouterLink>/
						  <RouterLink :to="copyrightMenu[4].href">{{ copyrightMenu[4].name }}</RouterLink>/
						  <RouterLink :to="copyrightMenu[5].href">{{ copyrightMenu[5].name }}</RouterLink>
					  </div>
				  </div>
			  </div>

		  </div>
	  </div>
  </footer>
</template>

<style scoped>

</style>