<template>
  <Layout :show-logo="false">

    <div class="template">

      <div class="author">
        <div class="section-container">
          <div class="author__bg cols">
            <div class="author__header col">
              <h1>Minusta</h1>
              <ThemeLine style="border-color: var(--color-primary)" />
              <p>
                Olen FITFARM-lisensoitu personal trainer, tietotekniikan insinööri ja viestintäalan yrittäjä. Oma
                treenaamiseni lähti käyntiin siitä, kun tajusin, että säännöllinen liikkuminen ja kunnon ruokavalio
                auttavat
                jaksamaan paremmin ihan tavallisessa arjessa. Aika pian aloin treenata tavoitteellisesti, ja kun tietoa
                kuntosaliharjoittelusta ja ruokavaliosta alkoi harrastuneisuuden myötä kertyä, kävin personal trainer
                -opinnot, jotta voisin auttaa muitakin voimaan paremmin.

                <br><br>Treenifilosofiani on, että liikkeet pitää tehdä ajatuksella ja oikein, jotta vältytään turhilta
                vammoilta ja harjoittelu tuottaa tuloksia. Lähtötasolla ei ole väliä, vaan parhaat tulokset saavutetaan
                oikealla asenteella ja johdonmukaisella tekemisellä.
                
                
                <br><br>Tällä hetkellä teen töitä yrittäjänä sekä
                personal trainer -ohjausten että verkkosivujen rakentamisen parissa. Kuntosaliharjoittelu on hyvää
                vastapainoa tietokoneella tehtävälle työlle. Erilaisia kiinnostuksenkohteitani olen pyrkinyt myös
                yhdistelemään rakentamalla hyvinvointiin liittyviä sovelluksia.
              </p>
            </div>
            <div class="col">
              <g-image class="author__image" alt="Kuvassa Jesse Raitapuro huppari päällä ja sheikkeri toisessa kädessä."
                src="~/assets/images/Jesse-Raitapuro-personal-trainer-2-alt.jpg" width="1000" />

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


export default {
  components: {
    Contact,
    ThemeLine,
    Spacer,
    BlogPosts
  },
  metaInfo: {
    title: 'Lisensoitu personal trainer',
    meta: [

      { key: 'description', name: "description", content: 'Olen FITFARM-lisensoitu personal trainer, tietotekniikan insinööri ja viestintäalan yrittäjä.' },
      // Facebook
      { key: "og:url", property: "og:url", content: `https://www.ptjesse.fi` },
      { key: 'og:title', property: "og:title", content: 'Minusta' },
      { key: "og:description", property: "og:description", content: 'Olen FITFARM-lisensoitu personal trainer, tietotekniikan insinööri ja viestintäalan yrittäjä.' },
      { key: 'og:image', property: "og:image", content: `https://www.ptjesse.fi/Jesse-Raitapuro-personal-trainer-og.jpg` },
      // Twitter
      { key: "twitter:card", property: "twitter:card", content: 'article' },
      { key: "twitter:url", property: "twitter:url", content: `https://www.ptjesse.fi` },
      { key: 'twitter:title', property: "twitter:title", content: 'Minusta' },
      { key: "twitter:description", property: "twitter:description", content: 'Olen FITFARM-lisensoitu personal trainer, tietotekniikan insinööri ja viestintäalan yrittäjä.' },
      { key: 'twitter:image', property: "twitter:image", content: `https://www.ptjesse.fi/Jesse-Raitapuro-personal-trainer-og.jpg` },
    ]
  },
}
</script>

<style lang="scss" scoped>

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

