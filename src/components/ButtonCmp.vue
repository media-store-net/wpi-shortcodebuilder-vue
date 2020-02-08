<template>
  <button :title="btn.title" @click="onClick(btn)">{{btn.text}}</button>
</template>

<script>
import { eventBus } from '../eventBus'

export default {
  name: 'ButtonCmp',
  props: ['btn'],
  methods: {
    onClick (btn) {
      eventBus.onButtonClicked(btn)
    }
  }
}
</script>

<style scoped>
  button {
    background: #f8f8f8;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 15px;
    padding: 10px 20px;
  }

  button:hover {
    background: #58a6bb;
    color: #f8f8f8;
    border: 1px solid #f8f8f8;
    cursor: pointer;
  }
</style>
