<template>
  <Layout :show-logo="false">

    <div class="template">
      <div class="section-container error__content ">
        <div class="error-title">
          <h1 class="error-title__text text-background-title">
            404
          </h1>
          <div class="center">
          <p><strong>Hups. Näyttää, ettei sivua löydy.</strong></p>
          <p>Syynä voi olla virheellisesti kirjoitettu tai vanhentunut linkki.</p>

    </div>
        </div>
        <div>
          <div><g-image alt="" width="128" src="~/assets/images/404-rocket.png" /></div>
          <a class="btn-primary button" href="/">Siirry etusivulle</a>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import ThemeLine from '~/components/ThemeLine.vue'


export default {
  components: {
    ThemeLine,

  },
  metaInfo: {
    title: '404 - hups. Näyttää, ettei sivua löydy.',
  },
}
</script>


