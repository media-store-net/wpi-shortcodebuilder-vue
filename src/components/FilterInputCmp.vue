<template>
    <div id="content">
      <label>Beschriftung des Buttons</label>
      <input type="text" :value="value" @change="emitValue"/>
    </div>
</template>

<script>
import { eventBus } from '../eventBus'

export default {
  name: 'FilterInputCmp',
  data: function () {
    return {
      value: ''
    }
  },
  methods: {
    emitValue (event) {
      eventBus.onFilterInput(event.target.value)
    }
  }
}
</script>

<style scoped>
  #content {
    margin: 2em 0;
    padding: 15px 0;
    background: inherit;
    text-align: left;
  }
  label {
    display: block;
  }
  input {
    margin: 1em 0;
    line-height: 2;
    width: 97%;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
</style>
