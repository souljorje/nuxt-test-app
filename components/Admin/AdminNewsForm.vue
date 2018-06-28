<template>
  <v-container>
    <v-form @submit.prevent="onSave">
      <v-text-field
        v-model="editedPost.author"
        label="Author Name"
        name="author"
        required
      ></v-text-field>
      <v-text-field
        v-model="editedPost.title"
        label="Title"
        name="title"
        required
      ></v-text-field>
      <v-text-field
        v-model="editedPost.img"
        label="Image"
        name="image"
        required
      ></v-text-field>
      <v-text-field
        v-model="editedPost.content"
        label="Content"
        name="content"
        required
        textarea
      ></v-text-field>
      <v-btn type="submit" color="teal">Save</v-btn>
      <v-btn to="/admin" color="deep-orange darken-4">Cancel</v-btn>
  </v-form>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        editedPost: this.post ? { ...this.post } : {
          author: '',
          title: '',
          img: '',
          content: '',
        }
      }
    },
    props: {
      post: {
        type: Object,
        required: false,
      }
    },
    methods: {
      onSave() {
        const postItems = Object.values(this.editedPost);
        const postIsValid = postItems.every((item) => {
          return `$${item}`.length > 0;
        });
        if (postIsValid) {
          this.$store.dispatch('updateNews', this.editedPost);
          this.editedPost = {
            author: '',
            title: '',
            img: '',
            content: '',
          }
        }
      },
    },
  }
</script>
