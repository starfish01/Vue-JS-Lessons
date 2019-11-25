import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import Ads from 'vue-google-adsense'

import { Icon } from "leaflet"


Vue.use(require('vue-script2'))

Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)
Vue.use(Ads.AutoAdsense, { adClient: 'ca-pub-4578555681953964' })

/* 
https://adsensexplosion.wordpress.com/2015/10/20/google-adsense-data-ad-slot-where-do-i-get-it/
Looks like i still need some add info
*/


Vue.config.productionTip = false
delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
