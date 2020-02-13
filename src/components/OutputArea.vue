<template>
    <div id="wrapper">
        <h3>Ausgabe-Shortcode:</h3>
        <transition name="fade">
            <div v-if="clipped" class="succes">{{ clipped }}</div>
        </transition>
        <div class="input-group">
            <input type="text" id="output-filed" name="output-field" class="form-control"
                   :value="content"
                   @change="onValueChange"/>
            <div class="input-group-append">
                <div class="input-group-text">
                    <a href="#" @click="toClipboard">
                        <svg class="bi bi-documents" width="1.5em" height="1.4em" viewBox="0 0 20 20"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M5 4h8a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V6a1 1 0 00-1-1H5z"
                                  clip-rule="evenodd"></path>
                            <path d="M7 2h8a2 2 0 012 2v10a2 2 0 01-2 2v-1a1 1 0 001-1V4a1 1 0 00-1-1H7a1 1 0 00-1 1H5a2 2 0 012-2z"></path>
                        </svg>
                        Clip</a>
                </div>
            </div>
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
      navigator.clipboard.writeText(this.content).then(() => {
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

    .input-group-append {
        margin: 1em 0 0;
        padding: 0;
    }

    .input-group-text {
        padding: .375rem .75rem;
    }

    a {
        color: #333;
        display: block;
    }

    a:hover {
        cursor: pointer;
        text-decoration: none;
    }

    .succes {
        margin: 2em 0;
        padding: 1em;
        background: #77b98f;
        color: #f8f8f8;
        border-radius: 5px;
    }
</style>
