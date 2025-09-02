const c1 = () => import(/* webpackChunkName: "page--src--pages--penkkipunnerruslaskuri-vue" */ "/home/nerd/Gitrepos/Personal-trainer-laskurit/src/pages/Penkkipunnerruslaskuri.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--energiankulutuslaskuri-vue" */ "/home/nerd/Gitrepos/Personal-trainer-laskurit/src/pages/Energiankulutuslaskuri.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--bmi-laskuri-vue" */ "/home/nerd/Gitrepos/Personal-trainer-laskurit/src/pages/bmi-laskuri.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/home/nerd/Gitrepos/Personal-trainer-laskurit/src/pages/404.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/nerd/Gitrepos/Personal-trainer-laskurit/src/pages/Index.vue")

export default [
  {
    path: "/penkkipunnerruslaskuri/",
    component: c1
  },
  {
    path: "/energiankulutuslaskuri/",
    component: c2
  },
  {
    path: "/bmi-laskuri/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
