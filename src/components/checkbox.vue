<template>
  <label class="checkbox">
    <input type="checkbox"
           :checked="currentValue"
           @change="change"
           class="ios-switch bigswitch green">
    <div>
      <div></div>
    </div>
  </label>
</template>
<script>
export default {
  data() {
    return {
      currentValue: this.value
    }
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
  },
  watch: {
    value(val) {
      if (val !== this.trueValue && val !== this.falseValue) {
        throw 'Value should be trueValue or falseValue.';
      }
      this.updateModel();
    }
  },
  methods: {
    updateModel() {
      this.currentValue = this.value === this.trueValue;
    },
    change(event) {
      const checked = event.target.checked;
      this.currentValue = checked;
      let value = checked ? this.trueValue : this.falseValue;
      this.$emit('input', value)
    }
  }
}
</script>
<style scoped>
label.checkbox {
  position: relative;
  cursor: pointer;
  display: flex;
}

input[type="checkbox"] {
  position: absolute;
  opacity: 0;
}


input[type="checkbox"].ios-switch+div {
  vertical-align: middle;
  width: 40px;
  height: 20px;
  border: 1px solid #bbbbbb;
  border-radius: 999px;
  background-color: #bbbbbb;
  transition-duration: .4s;
  transition-property: background-color, box-shadow;
  box-shadow: inset 0 0 0 0px rgba(0, 0, 0, 0.4);
  /*margin: 15px 1.2em 15px 2.5em;*/
}



input[type="checkbox"].ios-switch:checked+div {
  width: 40px;
  background-position: 0 0;
  background-color: #3b89ec;
  border: 1px solid #0e62cd;
  box-shadow: inset 0 0 0 10px rgba(59, 137, 259, 1);
}


input[type="checkbox"].bigswitch.ios-switch+div {
  width: 60px;
  height: 25px;
}



input[type="checkbox"].green.ios-switch:checked+div {
  background-color: #4CDA60;
  border: 1px solid #4CDA60;
  /*border:1px solid #00E359*/
  box-shadow: inset 0 0 0 18px rgba(0, 227, 89, 1);
}

input[type="checkbox"].ios-switch+div::before {
  content: "OFF";
  position: absolute;
  left: 30px;
  height: 25px;
  line-height: 25px;
  color: #fff;
  font-size: 12px;
}

input[type="checkbox"].ios-switch:checked+div::before {
  content: "ON";
  position: absolute;
  left: 10px;
  height: 25px;
  line-height: 25px;
  color: #fff;
  font-size: 12px;
}


input[type="checkbox"].ios-switch+div>div {
  float: left;
  width: 18px;
  height: 18px;
  border-radius: inherit;
  background: #ffffff;
  transition-timing-function: cubic-bezier(.54, 1.85, .5, 1);
  transition-duration: 0.4s;
  transition-property: transform, background-color, box-shadow;
  /*box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3), 0px 0px 0 1px rgba(0, 0, 0, 0.4);*/
  pointer-events: none;
  margin-top: 1px;
  margin-left: 1px;
}


input[type="checkbox"].ios-switch:checked+div>div {
  transform: translate3d(20px, 0, 0);
  -moz-transform: translate3d(20px, 0, 0);
  background-color: #ffffff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3), 0px 0px 0 1px rgba(8, 80, 172, 1);
}

input[type="checkbox"].bigswitch.ios-switch+div>div {
  width: 23px;
  height: 23px;
  margin-top: 1px;
}

input[type="checkbox"].bigswitch.ios-switch:checked+div>div {
  transform: translate3d(35px, 0, 0);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3), 0px 0px 0 1px rgba(8, 80, 172, 1);
}

input[type="checkbox"].green.ios-switch:checked+div>div {
  /*box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 162, 63, 1);*/
  box-shadow: none;
}
</style>
