import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    state: {
      token: null,
    },
    mutations: {
      setNews(state, news) {
        state.loadedNews = news;
      },
      updateNews(state, payload) {
        state.loadedNews[payload.id] = payload;
      },
      setToken(state, token) {
        state.token = token;
      }
    },
    getters: {
      loadedNews(state) {
        return state.loadedNews;
      }
    },
    actions: {
      async nuxtServerInit({ commit }, { app: { $axios } }) {
        const response = await $axios.$get('/news.json');
        const news = response;
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
        this.$axios.$put(`/news.json?auth=${state.token}`, state.loadedNews);
      },
      auth({ commit }, authData) {
        let authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDwj2GNbx3kbh5DTp_E0sEuIuYpo9LOSk0';
        if (!authData.isLogin) {
          authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDwj2GNbx3kbh5DTp_E0sEuIuYpo9LOSk0';
        }
        return this.$axios.$post(authUrl, {
          ...authData.claims,
          returnSectureToken: true,
        })
          .then((response) => {
            commit('setToken', response.idToken);
          })
          .catch((error) => {
            throw new Error(error);
        });
      }
    },
  });
}

export default createStore;
