<template>
    <div id="content" class="col form-group">
      <label>Beschriftung des Buttons</label>
      <input type="text" class="form-control" :value="value" @change="emitValue"/>
    </div>
</template>

<script>
import { eventBus } from '@/eventBus'

export default {
  name: 'FilterInputCmp',
  data: function () {
    return {
      value: ''
    }
  },
  methods: {
    emitValue (event) {
      eventBus.emit('onFilterInput', event.target.value)
    }
  }
}
</script>

<style scoped>
  #content {
    margin: 2rem 0;
    padding: 15px 0;
    background: inherit;
    text-align: left;
  }
</style>
