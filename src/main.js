import Hello from './components/Hello.vue'
import Checkbox from './components/checkbox.vue'

new Vue({
  el: '#app',
  template: '<checkbox v-model="value"/>',
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

