<template>
  <Layout :show-logo="false">

    <div class="template">
      <div class="section-container error__content ">
        <div class="error-title">
          <h1 class="error-title__text text-background-title">
            PTJesse-sivuston sovellukset
          </h1>
          <div class="center">
          <p><strong>Miksi päädyin tänne?</strong></p>
          <p>Todennäköisesti olit käyttämässä sovellustani, mutta kirjoitit linkin väärin. Pääset takaisin raiteille alla olevasta painikkeesta.</p>

    </div>
        </div>
        <div>
          <div><g-image alt="" width="128" src="~/assets/images/404-rocket.png" /></div>
          <a class="btn-primary button" href="https://ptjesse.fi/sovellukset">Siirry takaisin ptjesse.fi-sivuston sovelluksiin.</a>
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
    title: 'Miksi päädyin tänne? - PTJesse sivuston sovellukset.',
  },
}
</script>


