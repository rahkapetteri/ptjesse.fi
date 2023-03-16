<template>
  <Layout>
    <div class="blog-container  section-container">

      <div class="center-sidebar">
        <p v-if="$page.post.method_creator" class="header-notice">Tunnista taantumavaiheet ajoissa</p>
        <h1 class="post-title__text">
          {{ $page.post.card_title }}
        </h1>
        <div class="post content-box">
          <div class="post__header">
            <g-image width="960" alt="" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
          </div>
          <div class="post__content  article-container" v-html="$page.post.content" />
          <div class="post__footer">

          </div>
        </div>
      </div>

      <div class="left-sidebar">
        <!-- <a class="logo" href="/blogi/" aria-label="Siirry blogin etusivulle">
      toggle-theme to get similar colors for back to blog button
        <span class="logo__text toggle-theme">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.9481 14.8285L10.5339 16.2427L6.29126 12L10.5339 7.7574L11.9481 9.17161L10.1197 11H17.6568V13H10.1197L11.9481 14.8285Z"
              fill="currentColor" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M23 19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19ZM19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21Z"
              fill="currentColor" />
          </svg>

        </span>
      </a> -->
        <div class="sidebar-image">
          <g-image alt="" v-if="$page.post.sidebar_image" :src="$page.post.sidebar_image" />
        </div>
        <PostMeta class="post__spefific_meta" :post="$page.post" />
        <!-- <p class="post__description" v-html="$page.post.description" /> -->
        <PostTags :post="$page.post" />

      </div>


    </div>
    <Notice class="section-container" />
  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import Notice from '~/components/Notice.vue'


export default {
  components: {
    Notice,
    PostMeta,
    PostTags,
  },
  name: "Post",
  metaInfo() {


    return {
      title: this.$page.post.title,
      meta: [

        // Common metatags
        { key: 'description', name: "description", content: `Bodausorientoituneen kuntosaliblogin kategoria: ${this.$page.post.title}` },
        // { key: 'keywords', name: 'keywords', content: `${this.keywords}` },
        { key: "article:published_time", property: "article:published_time", content: `${this.$page.post.date}` },
        // Facebook
        { key: "og:type", property: "og:type", content: 'article' },
        { key: "og:url", property: "og:url", content: `${this.postUrl}` },
        { key: 'og:title', property: "og:title", content: `${this.$page.post.title}` },
        { key: "og:description", property: "og:description", content: `Bodausorientoituneen kuntosaliblogin kategoria: ${this.$page.post.title}` },
        { key: 'og:image', property: "og:image", content: `${this.siteUrl}${this.$page.post.cover_image.src}` },
        // Twitter
        { key: "twitter:card", property: "twitter:card", content: 'article' },
        { key: "twitter:url", property: "twitter:url", content: `${this.postUrl}` },
        { key: 'twitter:title', property: "twitter:title", content: `${this.$page.post.title}` },
        { key: "twitter:description", property: "twitter:description", content: `Bodausorientoituneen kuntosaliblogin kategoria: ${this.$page.post.title}` },
        { key: 'twitter:image', property: "twitter:image", content: `${this.siteUrl}${this.$page.post.cover_image.src}` },
      ]
    }
  },
  computed: {
    postUrl() {
      // VAIHDA TAG JOS TULEE ESIM /KATEGORIA
      let siteUrl = this.$static.metadata.siteUrl;
      return `${siteUrl}/tag/${this.$page.post.title.replace(/\s/g, "-")}`;
    },

    siteUrl() {
      return this.$static.metadata.siteUrl;
    }
    // keywords() {
    //   let postKeywordData = this.$page.post.tags.map(o => ({ id: o.id }))
    //   let keywords = ''
    //   for (let i in postKeywordData) {
    //     keywords = keywords.concat(` ${postKeywordData[i].id},`)
    //   }
    //   return keywords.trim().replace(/,\s*$/, "")
    // },
  }
}
</script>

<page-query>
query ($path: String)  {
  post (path: $path) {
    title
    path
    date (format: "D.M.YYYY")
    updated_at (format: "D.M.YYYY")
    timeToRead
    card_title
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 960, blur: 10, quality: 100)
    sidebar_image (width: 150, blur: 10, quality: 100)
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

<style lang="scss">
.post-title__text {
  text-align: center;
}

.sidebar-image {
  margin-bottom: 2rem;
}


.center-sidebar {
  max-width: 800px;
}

p.header-notice {
  margin: 0;
  color: var(--color-fade-text);
  text-transform: uppercase;
  font-size: var(--font-size-15);
}

.blog-container {
  display: grid;
  grid-auto-rows: minmax(0, auto);
  grid-gap: 6rem;
  grid-row-gap: 6rem;
  grid-template-columns: 3fr 1fr;

  h1 {
    font-size: calc( var(--font-size-h2) - 2px );
  }
}

@media screen and (max-width: 960px) {
  .blog-container {
    display: block;
  }

  .sidebar-image {
    margin: 6rem 0;
  }
}

.post-title__text {
  text-align: left;
  margin-top: 0;
}


.post {
  &__description {
    text-align: left;
    font-size: var(--font-size-15);
    color: var(--color-fade-text);
  }

  &__spefific_meta {
    text-align: left;
  }
  &__header {
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;
    img {
      width: 100%;
    }
    &:empty {
      display: none;
    }
        @media (max-width: 960px) {
        margin-right: calc(0px - var(--padding-container-horizontal));
        margin-left: calc(0px - var(--padding-container-horizontal));
        border-radius:0;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    // p:first-of-type {
    //   margin-top: 2rem;
    //   font-weight: 500;
    //   color: var(--post-start-text-color);
    // }

    img {
      // width: calc(100% + var(--space) * 2);
      // margin-left: calc(var(--space) * -1);
      display: block;
      // max-width: none;
    }
  }
}
</style>
