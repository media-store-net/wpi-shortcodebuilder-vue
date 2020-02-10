<template>
  <div id="app" class="container">
    <Header msg="Shortcode Builder © WP Immo Manager" />
    <ButtonArea />
    <InputArea :with-input="withInput" :content-cmp="inputContent.name"/>
    <OutputArea :content="genarateOutput" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header'
import ButtonArea from './components/ButtonArea'
import InputArea from './components/InputArea'
import OutputArea from './components/OutputArea'
import { eventBus } from './eventBus'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    Header,
    ButtonArea,
    InputArea,
    OutputArea
  },
  data () {
    return {
      mode: null,
      withInput: false,
      inputContent: {},
      filterBtn: '',
      outputContent: ''
    }
  },
  methods: {
    setInputContent: function (value) {
      this.inputContent = { ...value }
    },
    setOutput: function (value) {
      this.outputContent = `[${value.trim()}]`
    },
    optionSelected: function (button) {
      this.withInput = button.withInput
      this.setInputContent(button.component)
      this.mode = button.text.toLowerCase()
    },
    stringFromArray: function (array) {
      return array.join(' ')
    }
  },
  computed: {
    genarateOutput: function () {
      let filterArray = []
      switch (this.mode) {
        case 'suchfilter' :
          filterArray = ['search_filter_form']
          if (this.filterBtn.length) {
            filterArray.push('btn_text="')
            filterArray.push(this.filterBtn + '"')
          }
          const value1 = this.stringFromArray(filterArray)
          this.setOutput(value1)
          filterArray = []
          break
        case 'suchfilter-advanced' :
          filterArray = ['search_advanced']
          if (this.filterBtn.length) {
            filterArray.push('btn_text="')
            filterArray.push(this.filterBtn + '"')
          }
          const value2 = this.stringFromArray(filterArray)
          this.setOutput(value2)
          break
        case 'suchergebnisse' :
          this.setOutput('search_filter_result')
          break
        case 'immobilien-query' :
          this.setOutput('immobilien')
          break
        case 'umkreissuche' :
          this.setOutput('umkreissuche')
          break
        default :
          this.setOutput('Noch keine Option gewählt')
      }
      return this.outputContent
    }
  },
  created () {
    eventBus.$on('buttonClicked', (data) => {
      console.log('$on: buttonClicked')
      this.optionSelected(data)
    })
    eventBus.$on('onFilterInput', (data) => {
      this.filterBtn = data
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
label {
  display: block;
}
input, select {
  margin: 1em 0;
  line-height: 2;
  width: 97%;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
