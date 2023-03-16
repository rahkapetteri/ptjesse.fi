<template>
  <div class="default">
    <header id="jessenMenu" class="header-container container"
      :class="{ mobileActive: mobileActive }">
      <div class="menu-items header">
        <div class="header__left">
          <ToggleTheme class="hide-mobile-hamburger" />
          <Logo />

          <button aria-label="Avaa/sulje päävalikko" @click="toggleHamburger()" :class="{ 'is-active': mobileActive }"
            class="hamburger hamburger--spin hide-mobile-hamburger" type="button">
            <span class="hamburger-box hide-mobile-hamburger">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div class="nav-and-color-toggle" :class="{ mobileActive: mobileActive }">
          <nav>
            <ul class="header__right">
              <li @mouseenter="isMobile ? null : isHovering = true" @mouseleave="isMobile ? null : isHovering = false"
                class="dropdown">
                <div class="arrow-item">
                  <g-link to="/palvelut/">Palvelut</g-link>
                  <button @click="isHovering = !isHovering"
                      :class="{ revealArrow: isHovering }" class="dropdown-toggle">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-chevron-down">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg></button>
                </div>
                <ul class="submenu-container" :class="{ revealSubmenu: isHovering }">
                  <li class="submenu-item">
                    <!-- g-links prefetch content -->
                    <g-link to="/valmennus/">Valmennus</g-link>
                  </li>
                  <li class="submenu-item">
                    <g-link to="/pt-ohjaukset/">Pt-ohjaukset</g-link>
                  </li>
                  <li class="submenu-item">
                    <g-link to="/ohjelmat/">Ohjelmat</g-link>
                  </li>
                </ul>
              </li>
              <li>
                <g-link to="/minusta/">Minusta</g-link>
              </li>
              <li>
                <g-link to="/yhteys/">Ota yhteyttä</g-link>
              </li>
              <li>
                <g-link to="/blogi/">Blogi</g-link>
              </li>
              <li>
                <a class="external-link" href="https://ravinto.ptjesse.fi">Ravintosovellus</a>
              </li>
              <li>
                <a class="external-link" href="https://verkkokauppa.ptjesse.fi">Verkkokauppa</a>
              </li>
              <li class="hide-desktop-hamburger">
                <ToggleTheme />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <div class="container-insert-here-if-needed">

      <main class="main">
        <slot />
      </main>
      <footer>
        <div class="footer">
          <span class="footer__copyright">© Jesse Raitapuro {{ new Date().getFullYear() }}. </span>
          <span class="footer__links"> Sivun treenannut kuntoon <a href="https://www.digiaargh.fi">Digiaargh</a></span>
        </div>
        <div class="footer footer__cookies">
          <button class="cookie-button" type="button" aria-label="Avaa evästeasetukset"
            data-cc="c-settings">Evästeasetukset</button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'



export default {

  data() {
    return {
      isHovering: false,
      isMobile: false,
      mobileActive: false,
    }
  },
  methods: {
    mq() {

      if (process.isClient) {
        this.isMobile = window.matchMedia('(max-width: 960px)').matches;
        if (this.isMobile !== true) {
          this.mobileActive = false;
        }
      }
    },

    toggleHamburger() {
      this.mobileActive = !this.mobileActive
      this.setHamburger()
      window.scrollTo(0, 0);
    },
    setHamburger() {
      let body = document.body
      body.classList.toggle('disable-scroll')
    },

  },

  created() {
    if (process.isClient) {
      this.mq()
      window.addEventListener('resize', this.mq)
    }
  },

  beforeDestroy() {
    if (process.isClient) {
      window.removeEventListener('resize', this.mq)
      this.mobileActive = false;
      let body = document.body
      body.classList.remove('disable-scroll')
    }
  },

  props: {
    showLogo: { default: true },
  },
  components: {
    Logo,
    ToggleTheme,
  }
}
</script>

<style lang="scss">
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 1.4rem;

  &__copyright{
    margin-right: .5rem;
  }

  &__cookies {
    @media (max-width: 480px) {
      margin: 1rem 0;
    }
  }
}
</style>
