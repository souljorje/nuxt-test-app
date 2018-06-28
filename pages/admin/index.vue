<template>
  <div>
    <section>
      <v-container>
        <v-layout row wrap justify-center>
          <v-btn to="admin/new-post" color="blue-grey">Create news</v-btn>
        </v-layout>
      </v-container>
    </section>
    <section>
      <v-container>
        <h1>Exisiting news</h1>
      </v-container>
      <v-divider></v-divider>
      <NewsList :posts="loadedNews" isAdmin/>
    </section>
  </div>
</template>

<script>
import NewsList from "@/components/NewsList";
import { mapGetters } from 'vuex';
export default {
  components: {
    NewsList,
  },
  computed: {
    ...mapGetters([
      'loadedNews',
    ]),
  },
};
</script>

