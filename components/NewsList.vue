<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <appNews v-for="(post, id) in posts"
        :key="id"
        :title="post.title"
        :author="post.author"
        :id="id"
        :content="post.content"
        :img="post.img"
        :isAdmin="isAdmin"/>
    </v-layout>
  </v-container>
</template>

<script>
import News from "./News";
export default {
  components: {
    appNews: News,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Object,
      requred: true,
    }
  }
};
</script>

