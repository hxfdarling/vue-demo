import Hello from './components/Hello.vue'
import Checkbox from './components/checkbox.vue'

new Vue({
  el: '#app',
  template: '<div>点击报错<checkbox v-model="value"/></div>',
  data() {
    return {
      value: true
    }
  },
  components: {
    Checkbox
  }
})
new Vue({
  el: '#app2',
  components: { Hello },
  template: '<Hello/>',
  data() {
    return {
      value: true
    }
  }
})

