<template>
  <header>
    <h1>{{ msg }}</h1>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',
  props: {
    msg: String
  },
  data: () => {
    return {
    }
  }
}
</script>

<style scoped>

</style>
