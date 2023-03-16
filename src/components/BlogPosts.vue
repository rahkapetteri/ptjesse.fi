<template>
    <!-- List posts -->
    <div class="blog-posts">
      <div class="section-container">
        <h2>Uusimmat blogikirjoitukset</h2>
        <div class="posts cols-3">
          <PostCardClean v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
        </div>
      </div>
    </div>

</template>

<script>
import PostCardClean from '~/components/PostCardClean.vue'

export default {
  components: {
    PostCardClean
  }
}
</script>

<style lang="scss" scoped>

  .blog-posts{
  }
  h2{
    text-align: center;
    margin-bottom: var(--margin-block-image);
  }
</style>
