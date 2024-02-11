import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import LandingPage from '@/views/LandingPage.vue';
import MainSite from '@/views/MainSite.vue';
import FormSite from '@/views/FormSite.vue';
import PaginationSite from '@/views/PaginationSite.vue';
import Table from '@/views/Table.vue';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/main-site', component: MainSite, name: 'Main Site' },
  { path: '/form-site', component: FormSite, name: 'Form Site' },
  { path: '/pagination-site', component: PaginationSite, name: 'Pagination Site' },
  {path: "/table", name: "table", component: Table, name: 'Table'}
];

const router = new VueRouter({
  routes
});

export default router;
