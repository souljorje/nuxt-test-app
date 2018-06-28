<template>
  <NewsList :posts="loadedNews"/>
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
  // data() {
  //   return {
  //     loadedNews: [
  //       {
  //         id: 1,
  //         author: "John Doe",
  //         title: "Test",
  //         content:
  //           "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ipsum, voluptatibus at enim, blanditiis rerum impedit ad accusantium libero ex distinctio nam optio ducimus nisi dolor aspernatur suscipit delectus soluta!",
  //         img: "http://media.graytvinc.com/images/810*455/john+doe+4+for+web.jpg",
  //       },
  //       {
  //         id: 2,
  //         author: "Lorem Ipsum",
  //         title: "WTF",
  //         content:
  //           "Lorem ipsum, dolor sit amet consectetur adipisicing elit. London is a capital of Greate Britane",
  //         img: "http://2.bp.blogspot.com/_7PUOaAdgEsA/SwvW1ml-IsI/AAAAAAAAACs/UNcnP_IWp3I/s1600/loremipsum.jpg",
  //       },
  //       {
  //         id: 3,
  //         author: "Jiraya",
  //         title: "Naruto",
  //         content:
  //           "Raaaaaaaaaaaaaaaassssseeennnnggggannnnnnnnn",
  //         img: "https://vignette.wikia.nocookie.net/fear-world/images/c/cf/Jiraiya.jpg/revision/latest?cb=20140518203041",
  //       },
  //     ]
  //   }
  // }
};
</script>

