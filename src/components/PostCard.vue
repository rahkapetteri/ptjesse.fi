<template>
  <div class="post-card content-box" :class="{'post-card--has-poster' : post.poster}">
    <div class="post-card__header">
      <g-image alt="" v-if="post.cover_image" class="post-card__image" :src="post.cover_image" />
    </div>
    <div class="post-card__content">
      <h2 class="post-card__title" v-html="post.title" />
      <PostMeta class="post-card__meta" :post="post" />
      <p class="post-card__description" v-html="post.description" />
      <PostTags class="post-card__tags" :post="post" />

      <g-link class="post-card__link" v-html="post.title" :to="post.path"></g-link>
    </div>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['post'],
}
</script>

<style lang="scss" scoped>
.post-card {
  margin-bottom: calc(var(--space) * 2.5);
  border-radius: 2px;
  position: relative;
  display: flex;
  flex-direction: column;
  word-break: break-word;
  border-radius: 0.25rem;

    &__content{
    padding:1.25rem;
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
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }

  &__description{
      margin-top: 2rem;
      margin-bottom: 0;
      font-size: var(--font-size-17);
  }
}
</style>
