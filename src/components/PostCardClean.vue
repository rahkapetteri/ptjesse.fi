<template>
  <!-- <div class="post-card-c content-box" :class="{'post-card-c--has-poster' : post.poster}">
    <div class="post-card-c__header">
      <g-image alt="Cover image" v-if="post.cover_image" class="post-card-c__image" :src="post.cover_image" />
    </div>
    <div class="post-card-c__content">
      <h2 class="post-card-c__title" v-html="post.title" />
      <PostMeta class="post-card-c__meta" :post="post" />

      <g-link class="post-card-c__link" :to="post.path">Link</g-link>
    </div>
  </div> -->
    <div class="post-card-c content-box" :class="{'post-card-c--has-poster' : post.poster}">
    <div class="">
      <g-image alt="" v-if="post.cover_image" class="post-card-c__image" :src="post.cover_image" />
    </div>
    <div class="post-card-c__overlay">
      <div class="post-card-c__content">
        <h3 class="post-card-c__title" v-html="post.title" />
        <PostMeta class="post-card-c__meta" :post="post" />
        <a class="post-card-c__link" v-html="post.title" :href="post.path"></a>
        <p class="post-card-c__description" v-html="post.description" />
        <div class="post-card-c__readmore">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'

export default {
  components: {
    PostMeta,
  },
  props: ['post'],
}
</script>

<style lang="scss" scoped>

h2{
  margin-bottom: 0;
}

.post-card-c {
  margin-bottom: var(--space);
  position: relative;
  display: flex;
  flex-direction: column;
  word-break: break-word;
  border-radius: 0.25rem;


  &__overlay{
    padding: 1rem;
  }
  

  &__header {
    margin-bottom: calc(var(--space) / 2);
    margin-top: calc(var(--space) * -1);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    &:empty {
      display: none;
    }
  }


  &__image {
    min-width: 100%;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  &__title {
    margin-top: 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 10px 30px 0 rgba(0,0,0,.1);
  }

  &__tags {
    z-index: 1;
    position: relative;
  }

  &__link {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }

  &__readmore{
    max-width: 30px;
    color: var(--color-title);
    float: right;
  }

  &__description{
      margin-top: 1.2rem;
      margin-bottom: 0;
      font-size: var(--font-size-16);
  }
}
</style>
