<template>
  <div id="app" class="container">
    <SiteHeader msg="Shortcode Builder © WP Immo Manager"/>
    <ButtonArea/>
    <transition name="fade">
      <InputArea :with-input="withInput" :content-cmp="inputContent.name"/>
    </transition>
    <OutputArea :content="genarateOutput"/>
  </div>
</template>

<script lang="ts">
// Neue Imports für Vue 3
import { defineComponent } from 'vue'
import { eventBus } from '@/eventBus'

import SiteHeader from '@/components/SiteHeader'
import ButtonArea from '@/components/ButtonArea'
import InputArea from '@/components/InputArea'
import OutputArea from '@/components/OutputArea'
import {ButtonData, InputContent, QueryData} from '@/interfaces/Interfaces'


export default defineComponent({
  name: 'app',
  components: {
    SiteHeader,
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
      queryData: {},
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
          filterArray = ['immobilien']
          if (this.queryData) {
            for (const item in this.queryData) {
              filterArray.push(this.queryData[item])
            }
          }
          const value3 = this.stringFromArray(filterArray)
          this.setOutput(value3)
          break
        case 'umkreissuche' :
          this.setOutput('umkreissuche')
          break
        case 'umkreissuche advanced' :
          filterArray = ['umkreissuche_advanced']
          if (this.filterBtn.length) {
            filterArray.push('btn_text="')
            filterArray.push(this.filterBtn + '"')
          }
          const value4 = this.stringFromArray(filterArray)
          this.setOutput(value4)
          break
        default :
          this.setOutput('Noch keine Option gewählt')
      }
      return this.outputContent
    }
  },
  created() {
    eventBus.on('buttonClicked', (data) => {
      this.optionSelected(data)
    })
    eventBus.on('onFilterInput', (data) => {
      this.filterBtn = data
    })
    eventBus.on('onQueryInput', (data) => {
      this.queryData = Object.entries(data).reduce((a, [k, v]) => (v ? {
        ...a,
        [k]: v
      } : a), {})
    })
  }
});
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

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave {
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
</style>
