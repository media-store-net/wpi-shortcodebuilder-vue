<template>
    <button :title="btn.title" @click="onClick(btn)"
            class="btn btn-outline-info">{{btn.text}}
    </button>
</template>

<script>
import { eventBus } from '@/eventBus'

export default {
  name: 'ButtonCmp',
  props: ['btn'],
  methods: {
    onClick (btn) {
      eventBus.emit('buttonClicked', btn)

    }
  }
}
</script>

<style scoped>
    button {
        background: #f8f8f8;
        margin: 5px;
    }

    button:hover {
        cursor: pointer;
    }
</style>
