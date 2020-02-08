import Vue from 'vue'

export const eventBus = new Vue({
  state: {
  },
  methods: {
    onButtonClicked (btn) {
      this.$emit('buttonClicked', btn)
    },
    onFilterInput (value) {
      this.$emit('onFilterInput', value)
    }
  }
})
