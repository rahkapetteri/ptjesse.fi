<template>
  <Layout :show-logo="false">

    <div class="template">
      <div class="section-container">

        <div class="post-title">
          <h1 class="post-title__text text-background-title">
            Ravinto- ja treeniohjelmat
          </h1>
        </div>

        <div class="post__header">
          <g-image class="page__image  image" alt="" src="~/assets/images/pt-ohjelmat-kuvitus.jpg" width="1000" />
        </div>
        <div class="post__content center">
          <strong>
            <p>
              Ravinto- ja treeniohjelmat suunnitellaan yksilöllisesti, jotta ne sopisivat tilanteeseesi ja tukisivat
              parhaiten tavoitteitasi. Suunnittelun pohjana käytän alkukartoituskyselyä ja 
              ruokapäiväkirjaa. Näihin saat ohjeet ohjelman tilauksen jälkeen. Räätälöidyt ohjelmat toimitetaan sähköpostiisi 2–5 arkipäivän kuluessa siitä, kun olet täyttänyt alkukartoituksen ja ruokapäiväkirjan.</p>
          </strong>

          <br>
          Voit ostaa ohjelmat suoraan <a href="https://verkkokauppa.ptjesse.fi">verkkokaupastani</a>

          <h2>
            Treeniohjelmat
          </h2>

          <p>
            Suunnittelen tavoitteitasi tukevan harjoitusohjelman, jonka kesto on 12 viikkoa. Tavoitteesi voi olla
            esimerkiksi lihasmassan kasvattaminen, painon pudottaminen, voimatasojen lisääminen tai hyvinvoinnin
            parantaminen. Ohjelman suunnittelussa otan huomioon aiemman harjoittelutaustasi sekä mahdolliset rajoitteet.
          </p>

          <p>
            Treeniohjelma räätälöidään yksilöllisesti lähtötilanteesi ja tavoitteidesi pohjalta ja sovitetaan osaksi
            arkirutiinejasi. Sinulla ei tarvitse olla aiempaa kokemusta kuntosaliharjoittelusta.

          </p>

          <p>
            Treeniohjelman hinta 85 €.
            <br><br>Saat valmiin ohjelman sähköpostiisi pdf-muodossa.
          </p>

          <h2>Ravinto-ohjelmat </h2>
          <p>
            Ravinto-ohjelma suunnitellaan elintapojesi ja makusi mukaiseksi niin, että se tarjoaa terveelliselle ruokavaliolle raamit, joiden puitteissa voit syödä omaan makuusi sopivaa ruokaa. Ruokailun ei pidä olla stressaavaa, ja siksi rakennan juuri sinun arjessasi toimivan ravinto-ohjelman, joka huomioi omat mieltymyksesi.
            </p>
            <p>
     Rakennan ateriasuunnitelmat siten, että voit valita joka aterialle itsellesi sopivan vaihtoehdon vähintään kolmen tarjoamani pääraaka-aineen joukosta. Näin ravinto-ohjelma on helposti muokattavissa, ja siitä on sinulle apua vuosiksi eteenpäin.

          </p>

          <p>
Ravinto-ohjelman hinta 85 €.<br><br>Saat valmiin ohjelman sähköpostiisi pdf-muodossa.

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
import ThemeLine from '~/components/ThemeLine.vue'
import BlogPosts from '~/components/BlogPosts.vue'

export default {
  components: {
    Contact,
    ThemeLine,
    BlogPosts,

  },
  metaInfo: {
    title: 'Henkilökohtainen treeniohjelma ja ruokavalio',
    meta: [

      { key: 'description', name: "description", content: 'Rakennetaan sinulle oman arkesi ympärille räätälöidy ruokavalio ja treeniohjelma.' },
      // Facebook
      { key: "og:url", property: "og:url", content: `https://www.ptjesse.fi` },
      { key: 'og:title', property: "og:title", content: 'Henkilökohtainen treeniohjelma ja ruokavalio' },
      { key: "og:description", property: "og:description", content: 'Rakennetaan sinulle oman arkesi ympärille räätälöidy ruokavalio ja treeniohjelma.' },
      { key: 'og:image', property: "og:image", content: `https://www.ptjesse.fi/Jesse-Raitapuro-personal-trainer-og.jpg` },
      // Twitter
      { key: "twitter:card", property: "twitter:card", content: 'article' },
      { key: "twitter:url", property: "twitter:url", content: `https://www.ptjesse.fi` },
      { key: 'twitter:title', property: "twitter:title", content: 'Henkilökohtainen treeniohjelma ja ruokavalio' },
      { key: "twitter:description", property: "twitter:description", content: 'Rakennetaan sinulle oman arkesi ympärille räätälöidy ruokavalio ja treeniohjelma.' },
      { key: 'twitter:image', property: "twitter:image", content: `https://www.ptjesse.fi/Jesse-Raitapuro-personal-trainer-og.jpg` },
    ]
  },
}
</script>

<style lang="scss" scoped>

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

