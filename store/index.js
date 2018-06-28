import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {},
    mutations: {
      setNews(state, news) {
        state.loadedNews = news;
      },
      updateNews(state, payload) {
        state.loadedNews[payload.id] = payload;
      }
    },
    getters: {
      loadedNews(state) {
        return state.loadedNews;
      }
    },
    actions: {
      async nuxtServerInit({ commit }) {
        const response = await axios.get('https://nuxt-test-app.firebaseio.com/news.json');
        const news = response.data;
        commit('setNews', news);
        return new Promise(resolve => resolve());
      },
      setNews({ commit }, news) {
        commit('setNews', news);
      },
      updateNews({commit, state}, payload) {
        const currentNews = Object.keys(state.loadedNews);
        const newId = currentNews[currentNews.length - 1] + 1;
        const post = payload;
        if (!post.id) {
          post.id = newId;
        }
        commit('updateNews', post);
        axios.put('https://nuxt-test-app.firebaseio.com/news.json', state.loadedNews);
      }
    },
  });
}

export default createStore;
