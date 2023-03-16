<template>
  <Layout :show-logo="false">

    <div class="template">
      <div class="content">
        <div class="center section-container">
          <div class="center">
            <div class="post-title">
              <h1 class="text-background-title">Palvelut</h1>
            </div>

            <div class="post__header">
              <g-image class="page__image  image" alt="" src="~/assets/images/pt-ohjelmat-kuvitus.jpg" width="1000" />
            </div>
          </div>
          <div class="cols">
            <div class="col">
              <h2>Henkilökohtainen valmennus</h2>

              <p class="main-service-text">Yksilöllisesti räätälöity valmennus lihasmassan kasvattamiseen,
                painonpudotukseen tai esimerkiksi yleiskunnon parantamiseen. Sisältää harjoittelun ohjelmoinnin,
                ruokavalion ja minun tukeni koko valmennuksen ajan.
              </p>
              <p>
                Valmennus voidaan toteuttaa kokonaan etänä tai se voi sisältää lähiohjauksia. Valmennus tarjoaa
                monipuolista tukea, jonka avulla saavutat oman päämääräsi, oli se sitten startti
                elämäntapamuutokselle tai lihasmassan kasvattaminen.
              </p>

              <p>Valmennuksen yhteydenpito hoidetaan keskitetysti SYKE Tribe -valmennussovelluksen kautta.</p>

                <a class="btn-primary-alt button" href="/valmennus/"><div>Tutustu valmennukseen</div><div class="btn-primary-alt-line"></div></a>
            </div>

            <div class="col">
              <h2>Ohjatut PT-tunnit</h2>
              <p>Käydään tekniikat yhdessä läpi, jotta opit harjoittelemaan turvallisesti. Jos tekniikat ovat jo
                hallussa, voidaan keskittyä vetämään täysitehoisia treenejä. Yhden ohjauksen kesto
                <strong>75 min</strong>, joka on hieman tavanomaista pidempi.
              </p>

                <a class="btn-primary-alt button" href="/pt-ohjaukset/"><div>Tutustu tunteihin</div><div class="btn-primary-alt-line"></div></a>
            </div>

            <div class="col">
              <h2>Ravinto- ja treeniohjelmat</h2>

              <p>Suunnittelen tavoitteidesi mukaisen harjoitusohjelman ja ruokavalion. Harjoitusohjelman kesto on
                12 viikkoa. Ravinto- ja treeniohjelma räätälöidään yksilöllisesti lähtötilanteesi ja tavoitteidesi
                pohjalta ja sovitetaan osaksi arkirutiinejasi.
              </p>

                <a class="btn-primary-alt button" href="/ohjelmat/"><div>Tutustu ohjelmiin</div><div class="btn-primary-alt-line"></div></a>
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
import Services from '~/components/Services.vue'
import Spacer from '~/components/Spacer.vue'
import BlogPosts from '~/components/BlogPosts.vue'

export default {
  components: {
    Contact,
    Services,
    Spacer,
    BlogPosts,
  },
  metaInfo: {
    title: 'Kuntosalivalmennus Jyväskylässä tai etänä, ravinto- ja treeniohjelmat',

    meta: [

      { key: 'description', name: "description", content: 'Kuntosalivalmennukset Jyväskylässä tai etätoteutuksena, henkilökohtainen valmennus, ravinto- ja treeniohjelmat.' },
      // Facebook
      { key: "og:url", property: "og:url", content: `https://www.ptjesse.fi` },
      { key: 'og:title', property: "og:title", content: 'Kuntosalivalmennus Jyväskylässä tai etänä, ravinto- ja treeniohjelmat' },
      { key: "og:description", property: "og:description", content: 'Kuntosalivalmennukset Jyväskylässä tai etätoteutuksena, henkilökohtainen valmennus, ravinto- ja treeniohjelmat.' },
      { key: 'og:image', property: "og:image", content: `https://www.ptjesse.fi/Jesse-Raitapuro-personal-trainer-og.jpg` },
      // Twitter
      { key: "twitter:card", property: "twitter:card", content: 'article' },
      { key: "twitter:url", property: "twitter:url", content: `https://www.ptjesse.fi` },
      { key: 'twitter:title', property: "twitter:title", content: 'Kuntosalivalmennus Jyväskylässä tai etänä, ravinto- ja treeniohjelmat' },
      { key: "twitter:description", property: "twitter:description", content: 'Kuntosalivalmennukset Jyväskylässä tai etätoteutuksena, henkilökohtainen valmennus, ravinto- ja treeniohjelmat.' },
      { key: 'twitter:image', property: "twitter:image", content: `https://www.ptjesse.fi/Jesse-Raitapuro-personal-trainer-og.jpg` },
    ]
  },
}
</script>

<style lang="scss" scoped>
.center {
  margin: 0 auto;
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
      border-radius: 0;
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

.template {
  background: var(--bg-color);
  background: linear-gradient(0deg, var(--color-white) 0%, var(--bg-color) 88%);
}
</style>>

