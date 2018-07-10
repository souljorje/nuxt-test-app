import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);


const index = () => import ('~/pages/index').then(m => m.default || m);
const about = () => import ('~/pages/about/index').then(m => m.default || m);
const admin = () => import ('~/pages/admin/index').then(m => m.default || m);
const adminNewsID = () => import ('~/pages/admin/_newsId/index').then(m => m.default || m);
const adminAuth = () => import ('~/pages/admin/auth/index').then(m => m.default || m);
const adminNewPost = () => import ('~/pages/admin/new-post/index').then(m => m.default || m);
const news = () => import ('~/pages/news/index').then(m => m.default || m);
const newsId = () => import ('~/pages/news/_id/index').then(m => m.default || m);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'index',
        path: '/',
        component: index,
      },
      {
        name: 'about',
        path: '/about',
        component: about,
      },
      {
        name: 'admin',
        path: '/admin',
        component: admin,
      },
      {
        name: 'admin-newsId',
        path: '/admin/news/:newsId',
        component: adminNewsID,
      },
      {
        name: 'admin-auth',
        path: '/admin/auth',
        component: adminAuth,
      },
      {
        name: 'admin-new-post',
        path: '/admin/news/new-post',
        component: adminNewPost,
      },
      {
        name: 'news',
        path: '/news',
        component: news,
      },
      {
        name: 'news-id',
        path: '/news/:id',
        component: newsId,
      },
    ]
  })
}
