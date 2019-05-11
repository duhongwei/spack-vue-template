import "../style/common.css"
import "./index.css"
import Vue from 'vue'
import index from './index.vue'

new Vue({
  el: '#app',
  render:h=>h(index)
})