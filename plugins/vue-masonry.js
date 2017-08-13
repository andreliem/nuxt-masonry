import Vue from 'vue'
import VueMasonryPlugin from 'vue-masonry'
import NoSSR from 'vue-no-ssr'

Vue.use(VueMasonryPlugin)

Vue.component('no-ssr', NoSSR)
