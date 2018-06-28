<template>
  <div class="container">
    <v-alert v-if="error.statusCode === 404" :value="true" outline color="error" icon="warning">
      Page not found
    </v-alert>
    <v-alert v-else :value="true" outline color="error" icon="warning">
      An error occured
    </v-alert>
    <v-btn to="/" flat color="primary">Home page</v-btn>
    <!-- <nuxt-link to="/">Home page</nuxt-link> -->
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style scoped>
.container {
  font-family: sans-serif;
  padding-top: 10%;
  text-align: center;
}
h1 {
  font-size: 20px;
}
</style>
