<template>
  <div id="wrapper">
    <h3>Ausgabe:</h3>
    <div v-if="clipped" class="succes">{{ clipped }}</div>
    <div>
      <input type="text" id="output-filed" name="output-field" :value="content"
             @change="onValueChange"/>
      <a id="copy" @click="toClipboard">To Clipboard</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OutputArea',
  props: ['content'],
  data: function () {
    return {
      clipped: null,
      value: this.content
    }
  },
  methods: {
    onValueChange: function (event) {
      this.content = event.target.value
    },
    toClipboard: function (event) {
      event.preventDefault()
      console.log('copy to Clipboard...')
      navigator.clipboard.writeText(this.content).then(() => {
        // TODO clipped Div Animation...
        this.clipped = 'Der Text wurde kopiert'
        this.onClip()
      })
    },
    onClip: function () {
      setTimeout(() => {
        this.clipped = null
      }, 2000)
    }
  }
}
</script>

<style scoped>
  #wrapper {
    width: 80%;
    border: 1px solid #ccc;
    margin: 2em auto;
    padding: 15px;
    text-align: left;
    background: #eee;
  }

  input {
    line-height: 2;
    padding: 5px 10px;
    border-radius: 5px 0 0 5px;
    border: 1px solid #ccc;
    width: 80%;
  }

  #copy {
    display: inline-block;
    width: 15%;
    line-height: 2;
    padding: 2px 10px 3px 10px;
    background: #58a6bb;
    color: #f8f8f8;
    border: 1px solid #ccc;
    border-radius: 0 5px 5px 0;
    vertical-align: top;
  }

  #copy:hover {
    cursor: pointer;
  }

  .succes {
    margin: 2em 0;
    padding: 1em;
    background: #77b98f;
    color: #f8f8f8;
    border-radius: 5px;
  }
</style>
