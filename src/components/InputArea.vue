<template>
    <div id="wrapper" v-if="withInput">
      <h3>Eingabe-Optionen</h3>
      <component :is="contentCmp"></component>
    </div>
</template>

<script>
import FilterInputCmp from './FilterInputCmp'
export default {
  name: 'InputArea',
  components: { FilterInputCmp },
  props: ['withInput', 'contentCmp']
}
</script>

<style scoped>
  #wrapper {
    width: 80%;
    border: 1px solid #ccc;
    margin: 2em auto;
    padding: 15px;
    background: inherit;
    text-align: left;
  }
</style>
