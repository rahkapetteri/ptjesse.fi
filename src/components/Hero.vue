<template>
  <div class="hero section-container">
    <div class="hero__bg cols">
      <div class="hero__text col">
        <p>Moikka ja tervetuloa remmiin 💪</p>
        <h1>
          Olen Fitfarm-lisensoitu personal trainer & insinööri
          <span class="text-background">ja haluan saada sinut haastamaan itsesi.</span>
        </h1>
        <p>
          Hienoa saada sinut tänne! Jos olet kiinnostunut kuntosaliharjoittelusta ja hyvinvoinnista, olet oikeassa paikassa. Täältä löydät tietoa tavoitteellisesta treenaamisesta ja itselle sopivan ruokavalion valinnasta.
          
        </p>
        <ThemeLine style="border-color: var(--color-title)" />
        <div class="hero__typer_bg">
          <p><strong>Autan sinua saavuttamaan tavoitteesi, oli se sitten: </strong></p>
          <p>
            <ClientOnly>
              <vue-typer
                :text='["1. Lihasmassan kasvatus", "2. Voimatasojen lisääminen", "3. Hyvinvoinnin tukeminen", "4. Painon pudottaminen"]'
                :pre-type-delay='70' :type-delay='90' caret-animation='smooth'>
              </vue-typer>
            </ClientOnly>
          </p>

        </div>
        <!-- <div class="hero__line"></div>
						<p>Mikä kiinnostaisi sinua eniten?</p> -->
      </div>
      <div class="col hero__card">
        <g-image class="hero__image" alt="Kuvassa Jesse Raitapuro kädet puuskassa huppari päällä."
          src="~/assets/images/Jesse-Raitapuro-personal-trainer.jpg" width="1000" />
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import ThemeLine from "~/components/ThemeLine.vue";


export default {
  props: ["showTitle"],
  components: {
    ThemeLine,
    VueTyper: () =>
      import('vue-typer')
        .then(m => m.VueTyper)
        .catch(),
  },
};
</script>


<style lang="scss">
.hero.container {
  // padding-top: calc(var(--padding-container-vertical) - 3em);

}

.hero {

  h1{
    font-size: var(--font-size-hero);
  }
  
  h2 {
    margin-top: 0.5rem;
  }

  margin: 0 auto;

  &__image {
    border-radius: 0.25rem 0.25rem 0.25rem 0.25rem;
    border-bottom-left-radius: 12rem;
    float: right;
  }

  &__text {
    align-self: center;
  }

  &__intro {
    opacity: 0.8;
  }

  &__secondary_text {
    margin: 1em 0 1em 0;
  }

  &__card {
    // margin: 0 2em;
    // padding:0;
    // background-color: var(--color-box-bg);
    // border-top: 8px solid var(--color-primary);
    // border-radius: 2px;
    // border-left: 6px solid var(--color-primary);
    // box-shadow: 8px 8px 0px 0px rgba(0, 0, 255, .2);
  }

  &__links {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2em 0;
  }



  .icon-background {
    background: var(--color-secondary);
    color: var(--bg-color);
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    transform: rotate(45deg);
    /* Equal to rotateZ(45deg) */
  }

  .icon-element {
    transform: rotate(-45deg);
    /* Equal to rotateZ(45deg) */
  }
}

@media (max-width: 1300px) {
  .hero {
    h2 {
      margin-top: 0;
    }
  }

  //   @include grid(1, $gutter_x: 32px, $gutter_y: 32px);
}

.vue-typer .custom.char {
  font-size: 1.1em;
  font-weight: 800;
  color: var(--color-paragraph);
}

.vue-typer .custom.char.selected {
  font-size: 1.1em;
  color: var(--color-paragraph);
}

.vue-typer .custom.caret {
  font-size: 1.1em;
  width: 3px;
  background-color: var(--color-secondary);
}
</style>
