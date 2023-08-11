<template>
  <Layout :show-logo="false">

    <div class="template">

      <div class="author">
        <div class="section-container">
          <div class="author__bg cols">
            <div class="author__header col">
              <h1>Penkkipunnerruslaskuri — Arvioi penkkipunnerruksen ennätystulos</h1>
              <ThemeLine style="border-color: var(--color-primary)" />
              <p>
                Laske helposti suuntaa antava penkkipunnerrustuloksesi alla olevalla laskurilla. Laskurissa pohjautuu Mayhew et al. -kaavaan. <p class="text-sm">Lisää kuinka monta toistoa olet saanut maksimissaan tietyllä painolla.</p>
              </p>
              <CalculatorBenchPress />
            </div>
            <div class="col">
              <g-image class="author__image" alt=""
                src="~/assets/images/penkkipunnerrus-laskuri-kuvitus.jpg" width="800" />
            </div>

          </div>
          <div class="section-container pb-0 pl-0 pr-0">
          <div class="rage-text">
            <h3>Fun fact 😎</h3>
              <p><strong>Matemaattisia kaavoja tarkoitettu penkkipunnerruksen ykköstuloksen laskemiseksi.</strong></p>
              <p><strong>Mayhew et al.:</strong> (100 * paino(paunoina)) / (52.2 + (41.9 * e (-0.055 * toistojen määrä)))</p>
              <p><strong>Brzycki:</strong> Paino(paunoina) / ( 1.0278 — ( 0,0278 * toistojen määrä ) )</p>
              <p><strong>Epley:</strong> Paino(paunoina) * (1 + (0.0333 * toistojen määrä))</p>
              <p><strong>Lander:</strong> (100 * paino(paunoina)) / (101.3 — (2.67123 * toistojen määrä))</p>
          </div>
        </div>
        </div>
      </div>
      <Spacer />
      <Contact />

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
import Contact from '~/components/Contact.vue'
import ThemeLine from '~/components/ThemeLine.vue'
import Spacer from '~/components/Spacer.vue'
import BlogPosts from '~/components/BlogPosts.vue'
import CalculatorBenchPress from '~/components/CalculatorBenchPress.vue'


export default {

  components: {
    Contact,
    ThemeLine,
    Spacer,
    BlogPosts,
    CalculatorBenchPress
  },
  metaInfo: {
    title: 'Penkkipunnerruslaskuri — Kuinka paljon arviolta nostat penkistä?',
    meta: [

      { key: 'description', name: "description", content: 'Laske helposti Mayhew et al. -kaavaa hyödyntäen, kuinka paljon penkkipunnerruksen maksimituloksesi voisi olla.' },
      // Facebook
      { key: "og:url", property: "og:url", content: `https://www.ptjesse.fi` },
      { key: 'og:title', property: "og:title", content: 'Penkkipunnerruslaskuri — Kuinka paljon arviolta nostat penkistä?' },
      { key: "og:description", property: "og:description", content: 'Laske helposti Mayhew et al. -kaavaa hyödyntäen, kuinka paljon penkkipunnerruksen maksimituloksesi voisi olla.' },
      { key: 'og:image', property: "og:image", content: `https://www.ptjesse.fi/Jesse-Raitapuro-personal-trainer-og.jpg` },
      // Twitter
      { key: "twitter:card", property: "twitter:card", content: 'article' },
      { key: "twitter:url", property: "twitter:url", content: `https://www.ptjesse.fi` },
      { key: 'twitter:title', property: "twitter:title", content: 'Penkkipunnerruslaskuri — Kuinka paljon arviolta nostat penkistä?' },
      { key: "twitter:description", property: "twitter:description", content: 'Laske helposti Mayhew et al. -kaavaa hyödyntäen, kuinka paljon penkkipunnerruksen maksimituloksesi voisi olla.' },
      { key: 'twitter:image', property: "twitter:image", content: `https://www.ptjesse.fi/Jesse-Raitapuro-personal-trainer-og.jpg` },
    ]
  },
}
</script>

<style lang="scss" scoped>

.formulate-input {
  margin: 1rem 0;
}

.formulate-input[data-classification=text] input {
  color: var(--color-paragraph) !important;
}

.form-selection {
  font-size: var(--font-size-14);
}

.calculator {
  margin-bottom: var(--padding-container-vertical);
}

.kcal {
  font-size: var(--font-size-hero);
}

.author {

  &__image {
    margin-bottom: 1em;
    border-radius: 0.25rem 0.25rem 0.25rem 0.25rem;
    border-bottom-left-radius: 12rem;
    float: right;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
}

.post {
  &__header {
    // width: calc(100% + var(--space) * 2);
    // margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    // max-width: $container-desktop;
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
      // max-height:844px;
      // object-fit:cover;
      // object-position:top;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }

}
</style>

