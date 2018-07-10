<template>
  <NewsList :posts="loadedNews"/>
</template>

<script>
import NewsList from "@/components/NewsList";
import { mapGetters } from 'vuex';
export default {
  middleware: 'log',
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

