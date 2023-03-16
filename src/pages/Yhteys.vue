<template>
  <Layout :show-logo="false">

    <div class="template">
      <div>
        <div class="content center">
          <Author />
        </div>

      </div>

      <Spacer />

      <BlogPosts />
    </div>

  </Layout>
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

<script>
import Author from '../components/Author.vue'
import ThemeLine from '~/components/ThemeLine.vue'
import Spacer from '~/components/Spacer.vue'
import BlogPosts from '~/components/BlogPosts.vue'

export default {
  components: {
    Author,
    ThemeLine,
    Spacer,
    BlogPosts,
  },
  metaInfo: {
    title: 'Yhteystiedot',

    meta: [

      { key: 'description', name: "description", content: 'Ota yhteyttä jos tarvitset personal trainerin Jyväskylän alueella.' },
      // Facebook
      { key: "og:url", property: "og:url", content: `https://www.ptjesse.fi` },
      { key: 'og:title', property: "og:title", content: 'Yhteystiedot' },
      { key: "og:description", property: "og:description", content: 'Ota yhteyttä jos tarvitset personal trainerin Jyväskylän alueella.' },
      { key: 'og:image', property: "og:image", content: `https://www.ptjesse.fi/Jesse-Raitapuro-personal-trainer-og.jpg` },
      // Twitter
      { key: "twitter:card", property: "twitter:card", content: 'article' },
      { key: "twitter:url", property: "twitter:url", content: `https://www.ptjesse.fi` },
      { key: 'twitter:title', property: "twitter:title", content: 'Yhteystiedot' },
      { key: "twitter:description", property: "twitter:description", content: 'Ota yhteyttä jos tarvitset personal trainerin Jyväskylän alueella.' },
      { key: 'twitter:image', property: "twitter:image", content: `https://www.ptjesse.fi/Jesse-Raitapuro-personal-trainer-og.jpg` },
    ]

  },
}
</script>

<style lang="scss" scoped>
.center {
  margin: 0 auto;
}

.content {}

.template {
  background: var(--bg-color);
  background: linear-gradient(0deg, var(--color-white) 0%, var(--bg-color) 88%);
}
</style>>

