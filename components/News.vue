<template>
  <v-flex xs12 lg3 md4 sm6>
    <v-card>
      <v-card-media :src="img" height="200px">
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ title }}</h3>
          <div>{{ author }}</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn v-if="isAdmin" :to="{name: 'admin-newsId', params: { newsId: id }}" flat color="primary">Edit</v-btn>
        <v-btn v-else :to="{name: 'news-id', params: { id }}" flat color="primary">Read</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ["title", "author", "img", "isAdmin", "id", "content"],
};
</script>

