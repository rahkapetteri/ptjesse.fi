<template>
  <Layout>
    <div class="section-container">
    <h1 class="tag-title text-center space-bottom">
      # {{ $page.tag.title }}
    </h1>
    <div class="posts">
      <PostCard v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
  </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D.M.YYYY")
            updated_at (format: "D.M.YYYY")
            timeToRead
            description
            content,
            tags {
                id
                title
                path
            }
          }
          
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
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    Author,
    PostCard
  },
  metaInfo() {
    return {
      title: `${this.$page.tag.title}`,
      meta: [

        // Common metatags
        { key: 'description', name: "description", content: `Bodausorientoituneen kuntosaliblogin kategoria: ${this.$page.tag.title}` },
        // { key: 'keywords', name: 'keywords', content: `${this.keywords}` },
        { key: "article:published_time", property: "article:published_time", content: `${this.$page.tag.date}` },
        // Facebook
        { key: "og:type", property: "og:type", content: 'article' },
        { key: "og:url", property: "og:url", content: `${this.postUrl}` },
        { key: 'og:title', property: "og:title", content: `${this.$page.tag.title}` },
        { key: "og:description", property: "og:description", content: `Bodausorientoituneen kuntosaliblogin kategoria: ${this.$page.tag.title}` },
        // { key: 'og:image', property: "og:image", content: `${this.$page.tag.cover_image}` },
        // Twitter
        { key: "twitter:card", property: "twitter:card", content: 'article' },
        { key: "twitter:url", property: "twitter:url", content: `${this.postUrl}` },
        { key: 'twitter:title', property: "twitter:title", content: `${this.$page.tag.title}` },
        { key: "twitter:description", property: "twitter:description", content: `Bodausorientoituneen kuntosaliblogin kategoria: ${this.$page.tag.title}` },
        // { key: 'twitter:image', property: "twitter:image", content: `${this.$page.tag.cover_image}` },
      ]
    }
  },
  computed: {
    postUrl() {
      // VAIHDA TAG JOS TULEE ESIM /KATEGORIA
      let siteUrl = this.$static.metadata.siteUrl;
      return `${siteUrl}/tag/${this.$page.tag.title}`;
    },

    // keywords() {
    //   let postKeywordData = this.$page.tag.map(o => ({ id: o.id }))
    //   let keywords = ''
    //   for (let i in postKeywordData) {
    //     keywords = keywords.concat(` ${postKeywordData[i].id},`)
    //   }
    //   return keywords.trim().replace(/,\s*$/, "")
    // },
  }
}
</script>

