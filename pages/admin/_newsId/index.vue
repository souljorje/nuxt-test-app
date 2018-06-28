<template>
  <AdminNewsForm :post="loadedNews"/>
</template>

<script>
import AdminNewsForm from "@/components/Admin/AdminNewsForm";
export default {
  components: {
    AdminNewsForm
  },
  computed: {
    loadedNews() {
      return this.$store.getters.loadedNews[this.$route.params.newsId];
    },
  }
};
</script>
