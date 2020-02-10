<template>
    <div id="wrapper" class="row" v-if="withInput">
      <h3 class="col-12">Eingabe-Optionen</h3>
      <component :is="contentCmp"></component>
    </div>
</template>

<script>
import FilterInputCmp from './FilterInputCmp'
import QueryInputCmp from './QueryInputCmp'

export default {
  name: 'InputArea',
  components: { FilterInputCmp, QueryInputCmp },
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
  h3 {
    padding-left: 0;
  }
</style>
