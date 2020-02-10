<template>
  <div id="wrapper">
    <h2>Wähle eine Option</h2>
    <ButtonCmp
      v-for="btn in buttons"
      :btn="btn"
      :key="btn.id"
    />
  </div>
</template>

<script>
import ButtonCmp from './ButtonCmp'
import Button from '../interfaces/Button.js'

export default {
  name: 'ButtonArea',
  components: {
    ButtonCmp
  },
  data: () => {
    return {
      buttons: [
        new Button(
          1, 'Shortcode für die Suchfilter-Maske', 'Suchfilter', true, {
            name: 'FilterInputCmp',
            cmpPath: './FilterInputCmp'
          }
        ),
        new Button(
          2, 'Shortcode für die Erweiterte Suchfilter-Maske', 'Suchfilter-Advanced', true, {
            name: 'FilterInputCmp',
            cmpPath: './FilterInputCmp'
          }
        ),
        new Button(
          3, 'Shortcode für die Suchergebnisse', 'Suchergebnisse', false
        ),
        new Button(
          4, 'Shortcode für ein Immobilien Query', 'Immobilien-Query', true, {
            name: 'Query'
          }
        ),
        new Button(
          5, 'Shortcode für die Umkreissuche', 'Umkreissuche', false
        )
      ]
    }
  }
}
</script>

<style scoped>
  #wrapper {
    width: 80%;
    border: 1px solid #ccc;
    margin: 0 auto;
    padding: 15px;
    background: #eee;
  }
</style>
