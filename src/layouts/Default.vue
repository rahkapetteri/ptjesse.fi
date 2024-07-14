<template>
  <div class="default">
      <main class="main">
        <slot />
      </main>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'

export default {

  props: {
    showLogo: { default: true },
  },
  components: {
    Logo,
    ToggleTheme,
  }
}
</script>
