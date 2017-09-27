<template>
  <div class="hello">
    <div>-----------------</div>
    点击正常
    <checkbox v-model="value"></checkbox>
  </div>
</template>

<script>
import Checkbox from './checkbox.vue'

export default {
  components: { Checkbox },
  data() {
    return {
      value: true
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
