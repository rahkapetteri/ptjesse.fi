<template>
  <Layout :show-logo="false">
    <div class="container">
      <CalculatorBmi />
    </div>
  </Layout>
</template>

<script>
import CalculatorBmi from '~/components/CalculatorBmi.vue'


export default {
  components: {
    CalculatorBmi
  },
  metaInfo: {
    title: 'BMI laskuri — Laske painoindeksi heti',
    meta: [

      { key: 'description', name: "description", content: 'Haluatko tietää painoindeksin hetkessä? Käytä ilmaista BMI‑laskuria.' },
      // Facebook
      { key: "og:url", property: "og:url", content: `https://www.ptjesse.fi/bmi-laskuri` },
      { key: 'og:title', property: "og:title", content: 'BMI laskuri — Laske painoindeksi heti' },
      { key: "og:description", property: "og:description", content: 'Haluatko tietää painoindeksin hetkessä? Käytä ilmaista BMI‑laskuria.' },
      { key: 'og:image', property: "og:image", content: `https://ptjesse.fi/wp-content/uploads/2025/06/ptjesse-minusta-1.png` },
      // Twitter
      { key: "twitter:card", property: "twitter:card", content: 'article' },
      { key: "twitter:url", property: "twitter:url", content: `https://www.ptjesse.fi/bmi-laskuri` },
      { key: 'twitter:title', property: "twitter:title", content: 'BMI laskuri — Laske painoindeksi heti' },
      { key: "twitter:description", property: "twitter:description", content: 'Haluatko tietää painoindeksin hetkessä? Käytä ilmaista BMI‑laskuria.' },
      { key: 'twitter:image', property: "twitter:image", content: `https://ptjesse.fi/wp-content/uploads/2025/06/ptjesse-minusta-1.png` },
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

