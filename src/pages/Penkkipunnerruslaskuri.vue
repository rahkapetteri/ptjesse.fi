<template>
  <Layout :show-logo="false">
    <div class="container">
      <p>
        Laske helposti suuntaa antava penkkipunnerrustuloksesi alla olevalla laskurilla. Laskurissa pohjautuu Mayhew et
        al. -kaavaan.
      </p>
      <p class="text-sm">Lisää kuinka monta toistoa olet saanut maksimissaan tietyllä painolla.</p>
      <CalculatorBenchPress />
    </div>
  </Layout>
</template>


<script>
import CalculatorBenchPress from '~/components/CalculatorBenchPress.vue'


export default {

  components: {
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
</style>

