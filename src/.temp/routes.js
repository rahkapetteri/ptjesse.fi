const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/home/nerd/Gitrepos/ptjesse.fi/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--yhteys-vue" */ "/home/nerd/Gitrepos/ptjesse.fi/src/pages/Yhteys.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--valmennus-vue" */ "/home/nerd/Gitrepos/ptjesse.fi/src/pages/Valmennus.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--pt-ohjaukset-vue" */ "/home/nerd/Gitrepos/ptjesse.fi/src/pages/Pt-ohjaukset.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--palvelut-vue" */ "/home/nerd/Gitrepos/ptjesse.fi/src/pages/Palvelut.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--ohjelmat-vue" */ "/home/nerd/Gitrepos/ptjesse.fi/src/pages/Ohjelmat.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--minusta-vue" */ "/home/nerd/Gitrepos/ptjesse.fi/src/pages/Minusta.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--blogi-vue" */ "/home/nerd/Gitrepos/ptjesse.fi/src/pages/Blogi.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/home/nerd/Gitrepos/ptjesse.fi/src/pages/404.vue")
const c10 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/home/nerd/Gitrepos/ptjesse.fi/src/templates/Post.vue")
const c11 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/nerd/Gitrepos/ptjesse.fi/src/pages/Index.vue")

export default [
  {
    path: "/tag/:id/",
    component: c1
  },
  {
    path: "/yhteys/",
    component: c2
  },
  {
    path: "/valmennus/",
    component: c3
  },
  {
    path: "/pt-ohjaukset/",
    component: c4
  },
  {
    path: "/palvelut/",
    component: c5
  },
  {
    path: "/ohjelmat/",
    component: c6
  },
  {
    path: "/minusta/",
    component: c7
  },
  {
    path: "/blogi/",
    component: c8
  },
  {
    name: "404",
    path: "/404/",
    component: c9
  },
  {
    path: "/:path/",
    component: c10
  },
  {
    name: "home",
    path: "/",
    component: c11
  },
  {
    name: "*",
    path: "*",
    component: c9
  }
]
