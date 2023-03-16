<template>
  <div>
    <Layout :show-logo="true">
      <!-- Author intro -->
      <Hero />
      <Spacer />
      <Notice />
      <Services />
      <Spacer />
      <Comments />
      <!-- <CommentsSlider /> -->
      <Contact />

      <BlogPosts />

    </Layout>
  </div>
</template>

<page-query>
query {
  posts: allPost(perPage: 3, filter: { published: { eq: true } }) {
    edges {
      node {
        id
        title
        date (format: "D.M.YYYY")
        updated_at (format: "D.M.YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        sidebar_image (width: 250, height: 250, blur: 10, quality: 100)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<static-query>
    query {
        metadata {
            siteUrl
        }
    }
</static-query>

<script>
import Services from '~/components/Services.vue'
import Hero from '../components/Hero.vue'
import Comments from '../components/Comments.vue'
// import CommentsSlider from '../components/CommentsSlider.vue'
import Notice from '../components/Notice.vue'
import Contact from '../components/Contact.vue'
import BlogPosts from '~/components/BlogPosts.vue'
import Spacer from '~/components/Spacer.vue'

export default {
  // data(){
  //   return {
  //     siteUrl: 'https://www.ptjesse.fi'
  //   }
  // },
  components: {
    Services,
    Hero,
    Comments,
    Notice,
    Contact,
    BlogPosts,
    Spacer,
    // CommentsSlider,
  },
  metaInfo: {
    title: 'Personal trainer -palvelut ja kuntosalivalmennukset Jyväskylä',
    meta: [

      // Facebook
      { key: "og:url", property: "og:url", content: `https://www.ptjesse.fi` },
      { key: 'og:title', property: "og:title", content: 'Personal trainer -palvelut ja kuntosalivalmennukset Jyväskylä' },
      { key: "og:description", property: "og:description", content: 'Personal trainer -palvelut, kuntosaliohjaukset, treeniohjelmat ja ruokavaliot. Jesse Raitapuro' },
      { key: 'og:image', property: "og:image", content: `https://www.ptjesse.fi/Jesse-Raitapuro-personal-trainer-og.jpg` },
      // Twitter
      { key: "twitter:card", property: "twitter:card", content: 'article' },
      { key: "twitter:url", property: "twitter:url", content: `https://www.ptjesse.fi` },
      { key: 'twitter:title', property: "twitter:title", content: 'Personal trainer -palvelut ja kuntosalivalmennukset Jyväskylä' },
      { key: "twitter:description", property: "twitter:description", content: 'Personal trainer -palvelut Jyväskylässä' },
      { key: 'twitter:image', property: "twitter:image", content: `https://www.ptjesse.fi/Jesse-Raitapuro-personal-trainer-og.jpg` },
    ]
  },

  computed: {
    pageUrl(){
      let url = this.$static.metadata.siteUrl;
      return url;
    }
  }
}
</script>
