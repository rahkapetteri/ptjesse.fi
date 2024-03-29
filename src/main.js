// Import main css
import '~/assets/style/index.scss'
import config from '../gridsome.config'
import VueFormulate from '@braid/vue-formulate'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'



// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  let copyRightNotice = `\u00a9 ${
    config.author
} ${new Date().getFullYear()}`
  head.htmlAttrs = { lang: 'fi' }
  head.meta.push(
    {
        key: 'keywords',
        name: 'keywords',
        content: config.keywords
    },
    {
      name: 'author',
      content: config.author
    },
    {
        key: 'description',
        name: 'description',
        content: config.siteDescription
    },

    { name: 'copyright', content: copyRightNotice},
    { key:"og:type",  property: "og:type", content: 'article' },
    { key:"og:description",  property: "og:description", content: config.siteDescription },
    // { key:"og:image", property: "og:image", content: '~/assets/images/author.jpg' },
    { property: "og:site_name", content: config.siteName }
    );
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Vue formulate register
  Vue.use(VueFormulate)

  head.bodyAttrs = { class: 'custom-body-class' }
}
