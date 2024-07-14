<template>
  <Layout :show-logo="false">
    <div class="container">
      <p>
      Laske helposti suuntaa antava energian tarpeesi alla olevalla laskurilla. Laskuri pohjautuu Harris-Benedictin-kaavaan ja kulutuskertoimiin, joka kertoo kuinka paljon kaloreita tarvitset päivässä tavoitteesi mukaan.</p>
      <p class="text-sm">Lisää vähintään pituus, paino ja ikä.</p>
      <Calculator />
    </div>
  </Layout>
</template>

<script>
import Calculator from '~/components/Calculator.vue'


export default {
  components: {
    Calculator
  },
  metaInfo: {
    title: 'Perusaineenvaihdunta laskuri — Paljonko kaloreita tarvitset?',
    meta: [

      { key: 'description', name: "description", content: 'Laske helposti Harris-Benedict-kaavalla kuinka paljon kaloreita tarvitset päivässä.' },
      // Facebook
      { key: "og:url", property: "og:url", content: `https://www.ptjesse.fi` },
      { key: 'og:title', property: "og:title", content: 'Perusaineenvaihdunta laskuri — Paljonko kaloreita tarvitset?' },
      { key: "og:description", property: "og:description", content: 'Laske helposti Harris-Benedict-kaavalla kuinka paljon kaloreita tarvitset päivässä.' },
      { key: 'og:image', property: "og:image", content: `https://www.ptjesse.fi/Jesse-Raitapuro-personal-trainer-og.jpg` },
      // Twitter
      { key: "twitter:card", property: "twitter:card", content: 'article' },
      { key: "twitter:url", property: "twitter:url", content: `https://www.ptjesse.fi` },
      { key: 'twitter:title', property: "twitter:title", content: 'Perusaineenvaihdunta laskuri — Paljonko kaloreita tarvitset?' },
      { key: "twitter:description", property: "twitter:description", content: 'Laske helposti Harris-Benedict-kaavalla kuinka paljon kaloreita tarvitset päivässä.' },
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

</style>

