<template>
  <Layout :show-logo="false">

    <div class="section-container">
      <h1 class="text-background-title">Blogikirjoitukset</h1>
    </div>
    <!-- List posts -->
    <div class="section-container">
			<!-- <ThemeLine style="border-color: var(--color-primary)" /> -->
      <div class="posts cols">
        <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
      </div>
      </div>
      <Spacer />
      <Author />
  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D.M.YYYY")
        updated_at (format: "D.M.YYYY")
        timeToRead
        description
        cover_image (width: 1100, blur: 10, quality: 100)
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

<script>
import PostCard from '~/components/PostCard.vue'
import Author from '../components/Author.vue'
import ThemeLine from '~/components/ThemeLine.vue'
import Spacer from '~/components/Spacer.vue'

export default {
  components: {
    PostCard,
    Author,
    ThemeLine,
    Spacer
  },
  metaInfo: {
    title: 'Blogi — Kuntosali ja hyvinvointi',
            meta: [
      {
        description: 'Kirjoittelen artikkeleita kuntosaliharjoittelusta, ravinto-ohjelmista sekä hyvinvoinnista.',
      }
    ],
  }
}
</script>