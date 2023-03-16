<template>
  <Layout :show-logo="false">

    <div class="template">
      <div class="section-container">
        <div class="post-title">
          <h1 class="post-title__text text-background-title">
            Valmennus
          </h1>
        </div>
        <div class="post__header">
          <g-image class="page__image  image" alt="" src="~/assets/images/pt-valmennus-kuvitus.jpg" width="1000" />
        </div>
        <div class="post__content center">
          <p>Henkilökohtainen valmennus sopii esimerkiksi lihasmassan kasvattamiseen, painonpudotukseen tai yleiskunnon
            parantamiseen. Valmennus räätälöidään yksilöllisesti lähtötilanteesi ja tavoitteidesi pohjalta. Sinulla ei
            tarvitse olla aiempaa kokemusta kuntosaliharjoittelusta. Valmennus voidaan toteuttaa kokonaan etänä tai se
            voi sisältää lähiohjauksia. Valmennus tarjoaa monipuolista tukea, jonka avulla saavutat oman päämääräsi, oli
            se sitten startti elämäntapamuutokselle tai lihasmassan kasvattaminen.</p>

          Voit ostaa valmennuksen suoraan <a href="https://verkkokauppa.ptjesse.fi">verkkokaupastani</a>

          <h2>Valmennus sisältää:</h2>

          <ul>
            <li>yksilöllisesti toteutettavan harjoittelun ohjelmoinnin </li>

            <li>yksilöllisesti toteutettavan ruokavaliosuunnitelman </li>

            <li>tukeni koko valmennuksen ajan </li>

            <li>ohjelmien muokkaukset aina tarvittaessa</li>

            <li>kerran kuukaudessa 20 min mittainen puhelu esimerkiksi Teamsin kautta</li>

            <li>mahdollisuus lähettää tekniikkavideoita tarkastettavaksi etänä</li>

            <li>lähiohjauksia kuntosalilla (valinnainen, lisämaksusta).</li>
          </ul>


          <p>Valmennuksen pohjana toimii avoin ja sujuva kommunikaatio, joka mahdollistaa sen, että voin rakentaa
            aidosti sinulle sopivat ratkaisut arkeen niin treenien kuin ruokailujenkin suhteen. Treenaajien ominaisuudet
            ja mieltymykset voivat vaihdella paljonkin, joten tärkeintä on valita oikeat työkalut harjoitteluun.
            Vältetään poppaskonsteja ja arjessa mahdottomia ratkaisuja ja rakennetaan sen sijaan perusasioista toimiva
            kokonaisuus, joka mahdollistaa motivoituneen ja aktiivisen elämäntavan.</p>


          <h2>Valmennuksen aloittaminen </h2>

          <ol>
            <li>Osta verkkokaupasta itsellesi sopivan pituinen valmennus. Saat sähköpostiisi ohjeet alkukartoitusta sekä ruokapäiväkirjan pitoa varten.</li>

            <li>Teen sinulle suunnitelman alkukartoituksen ja tavoitteidesi pohjalta. Valmennus alkaa vasta kun olen lähettänyt sinulle ohjelman ja ruokavalion.</li>

            <li>Käydään suunnitelma tarvittaessa läpi n. 15 minuutin etäpalaverilla, ja valmennus voi alkaa.</li>

          </ol>

          <p>
            Ravinto- ja harjoitusohjelmia muokataan valmennuksen edetessä jopa viikkotasolla, jotta ne sopisivat
            mahdollisimman hyvin elämänrytmiisi. On tärkeää, että harjoittelu ja sitä tukevat elämäntavat saadaan
            sopiviksi osasiksi elämääsi. <br><br>

            Saat ohjeita ohjelmien mukauttamiseen tarpeen mukaan, esimerkiksi treenimäärien muuttuessa tai huonosti
            nukutun yön jälkeen. Parhaan tuloksen saavutat, kun olet itse aktiivinen, seuraat vointiasi ja edistymistäsi
            sekä kerrot kuulumisiasi. Jos kaikki rullaa hyvin, voit kertoa vaikkapa viikoittaiset treenikuulumiset ja
            yleisen voinnin. Näiden pohjalta tarkastan suunnitelman edistymisen ja teen tarvittaessa muutoksia
            suunnitelmaan.
          </p>

          <p class="rage-text">Valmennuksen yhteydenpito hoidetaan keskitetysti <a href="https://syketribe.fi/"
              class="external-link">SYKE Tribe -valmennussovelluksen kautta.</a> Sovelluksen avulla yhteydenpito sujuu
            vaivatta ja kaikki materiaalit pysyvät keskitetysti yhdessä paikassa. Sovellukseen lisättävät
            harjoitusohjelmat sisältävät myös video- tai kuvaohjeet liikkeiden suorittamiseen.
          </p>

          <p>Hintaan sisältyy SYKE Tribe -valmennussovelluksen käyttö. Hinta ei sisällä lähiohjauksia.</p>

          Voit ostaa valmennuksen suoraan <a href="https://verkkokauppa.ptjesse.fi">verkkokaupastani</a>


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
    title: 'Henkilökohtainen valmennus',

    meta: [

      { key: 'description', name: "description", content: 'Henkilökohtainen kuntosalivalmennus Jyväskylän alueella tai etänä. Lihasmassan kasvatus, kuntosaliharjoittelu ja painonpudotus.' },
      // Facebook
      { key: "og:url", property: "og:url", content: `https://www.ptjesse.fi` },
      { key: 'og:title', property: "og:title", content: 'Kuntosalivalmennus Jyväskylässä tai etävalmennuksena' },
      { key: "og:description", property: "og:description", content: 'Henkilökohtainen kuntosalivalmennus Jyväskylän alueella tai etänä. Lihasmassan kasvatus, kuntosaliharjoittelu ja painonpudotus.' },
      { key: 'og:image', property: "og:image", content: `https://www.ptjesse.fi/Jesse-Raitapuro-personal-trainer-og.jpg` },
      // Twitter
      { key: "twitter:card", property: "twitter:card", content: 'article' },
      { key: "twitter:url", property: "twitter:url", content: `https://www.ptjesse.fi` },
      { key: 'twitter:title', property: "twitter:title", content: 'Kuntosalivalmennus Jyväskylässä tai etävalmennuksena' },
      { key: "twitter:description", property: "twitter:description", content: 'Henkilökohtainen kuntosalivalmennus Jyväskylän alueella tai etänä. Lihasmassan kasvatus, kuntosaliharjoittelu ja painonpudotus.' },
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
</style>

