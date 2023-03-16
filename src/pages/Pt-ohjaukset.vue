<template>
  <Layout :show-logo="false">

    <div class="template">
      <div class="section-container">

        <div class="center">
          <div class="post-title">
            <h1 class="post-title__text text-background-title">
              Ohjatut PT-tunnit
            </h1>
          </div>

          <div class="post__header">
            <g-image class="page__image  image" alt="" src="~/assets/images/pt-ohjaukset-kuvitus.jpg" width="1000" />
          </div>
        </div>
        <div class="post__content center">
          <strong>
            <h2>Personal trainer -tunnit Jyväskylässä</h2>
          </strong>
          <p>Ohjatuilla PT-tunneilla käymme yhdessä läpi esimerkiksi treenin suoritustekniikat ja korjaamme tarvittaessa
            ongelmakohtia. Jos sinulla on jo tekniikat hallussa, tunneilla voidaan keskittyä vetämään täysitehoisia
            treenejä.</p>

          <p>
            Ennen sovittua tapaamista asetamme tavoitteet ohjatulle harjoituskerralle ja käymme läpi mahdolliset
            rajoitteet (kuten kivut ja jumit).

            <br><br>Yhden ohjauksen kesto 75 min, joka on hieman tavanomaista pidempi. Hinta: 85 €

          </p>

          <p>
            Ohjaukset tapahtuvat PTVGYMillä, osoitteessa Vasarakatu 25, Jyväskylä. Jos sinulla ei ole salikorttia
            PTVGYMille niin maksat ohjauksen lisäksi treenimaksun 8 €/kerta.
          </p>

        </div>

      </div>
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
import BlogPosts from '~/components/BlogPosts.vue'


export default {
  components: {
    Contact,
    BlogPosts,

  },
  data() {
    return {

    };
  },
  metaInfo: {
    title: 'Kuntosaliohjaus Jyväskylä - ohjattu kuntosaliharjoittelu',
    meta: [

      { key: 'description', name: "description", content: 'Ohjatuilla personal trainer -tunneilla käymme yhdessä läpi esimerkiksi treenin suoritustekniikat ja korjaamme tarvittaessa ongelmakohtia. Ennen sovittua tapaamista asetamme tavoitteet ohjatulle harjoituskerralle ja käymme läpi mahdolliset rajoitteet.' },
      // Facebook
      { key: "og:url", property: "og:url", content: `https://www.ptjesse.fi` },
      { key: 'og:title', property: "og:title", content: 'Kuntosaliohjaus Jyväskylä - ohjattu kuntosaliharjoittelu' },
      { key: "og:description", property: "og:description", content: 'Ohjatuilla personal trainer -tunneilla käymme yhdessä läpi esimerkiksi treenin suoritustekniikat ja korjaamme tarvittaessa ongelmakohtia. Ennen sovittua tapaamista asetamme tavoitteet ohjatulle harjoituskerralle ja käymme läpi mahdolliset rajoitteet.' },
      { key: 'og:image', property: "og:image", content: `https://www.ptjesse.fi/Jesse-Raitapuro-personal-trainer-og.jpg` },
      // Twitter
      { key: "twitter:card", property: "twitter:card", content: 'article' },
      { key: "twitter:url", property: "twitter:url", content: `https://www.ptjesse.fi` },
      { key: 'twitter:title', property: "twitter:title", content: 'Kuntosaliohjaus Jyväskylä - ohjattu kuntosaliharjoittelu' },
      { key: "twitter:description", property: "twitter:description", content: 'Ohjatuilla personal trainer -tunneilla käymme yhdessä läpi esimerkiksi treenin suoritustekniikat ja korjaamme tarvittaessa ongelmakohtia. Ennen sovittua tapaamista asetamme tavoitteet ohjatulle harjoituskerralle ja käymme läpi mahdolliset rajoitteet.' },
      { key: 'twitter:image', property: "twitter:image", content: `https://www.ptjesse.fi/Jesse-Raitapuro-personal-trainer-og.jpg` },
    ]
  },
}
</script>

<style lang="scss" scoped>

.post-title {
  padding: 0 0 3rem 0;
  text-align: center;
}

.post {
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

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }

}
</style>
