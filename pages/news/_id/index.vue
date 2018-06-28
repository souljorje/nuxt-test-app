<template>
  <v-card>
    <v-card-media :src="post.img" height="600px">
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex xs12 align-end flexbox>
            <span class="headline">{{ post.title }}</span>
            <div>{{ post.author }}</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-media>
    <v-card-title>
      <v-container>
        <v-layout row wrap justify-center>
          <v-flex xs12 lg8 md10> {{ post.content }} </v-flex>
        </v-layout>
      </v-container>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  validate(data) {
    return /^\d+$/.test(data.params.id);
  },
  computed: {
    post() {
      return this.$store.getters.loadedNews[this.$route.params.id];
    },
  }
};
</script>
