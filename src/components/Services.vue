<template>
	<div class="services section-container">
		<div class="">
			<div class="services__header">
				<h2 class="text-background-title">Tarjoamani palvelut</h2>
				<!-- <ThemeLine style="border-color: var(--color-secondary); margin: 1.5rem auto;" /> -->
				<div class="services__link"><p class="services__small_text">Tarjoan apuani aina henkilökohtaisesta valmennuksesta valmiisiin paketteihin.</p>
				</div>
			</div>

			<div class="services__bg cols">
				<!-- <div class="col services__card"> -->

				<div class="services__link">
					<h3 class="main-service">Henkilökohtainen valmennus</h3>
					<p class="main-service-text">Yksilöllisesti räätälöity valmennus lihasmassan kasvattamiseen,
						painonpudotukseen tai esimerkiksi yleiskunnon parantamiseen. Sisältää harjoittelun ohjelmoinnin,
						ruokavalion ja minun tukeni koko valmennuksen ajan.
					</p>
					<p>
						Valmennus voidaan toteuttaa kokonaan etänä tai se voi sisältää lähiohjauksia. Valmennus tarjoaa
						monipuolista tukea, jonka avulla saavutat oman päämääräsi, oli se sitten startti
						elämäntapamuutokselle tai lihasmassan kasvattaminen.
					</p>

					<p>Valmennuksen yhteydenpito hoidetaan keskitetysti SYKE Tribe -valmennussovelluksen kautta.</p>
					<a class="btn-primary-alt button" href="/valmennus/"><div>Tutustu valmennukseen</div><div class="btn-primary-alt-line"></div></a>
				</div>
				<!-- <div class="services__link hide-on-stack"></div> -->

				<div class="services__link">
					<h3>Ohjatut PT-tunnit</h3>
					<p>Käydään tekniikat yhdessä läpi, jotta opit harjoittelemaan turvallisesti. Jos tekniikat ovat jo
						hallussa, voidaan keskittyä vetämään täysitehoisia treenejä. Yhden ohjauksen kesto
						<strong>75 min</strong>, joka on hieman tavanomaista pidempi.
					</p>
					<a class="btn-primary-alt button" href="/pt-ohjaukset/"><div>Tutustu tunteihin</div><div class="btn-primary-alt-line"></div></a>
				</div>
				<div class="services__link mb-0">
					<h3>Ravinto- ja treeniohjelmat</h3>
					<p>Suunnittelen tavoitteidesi mukaisen harjoitusohjelman ja ruokavalion. Harjoitusohjelman kesto on
						12 viikkoa. Ravinto- ja treeniohjelma räätälöidään yksilöllisesti lähtötilanteesi ja
						tavoitteidesi pohjalta ja sovitetaan osaksi arkirutiinejasi.
					</p>
					<a class="btn-primary-alt button mb-0" href="/ohjelmat/"><div>Tutustu ohjelmiin</div><div class="btn-primary-alt-line"></div></a>
				</div>
				<!-- </div> -->
				<!-- <div class="col services__text">
						<g-image class="services__image" alt="hero image"  src="~/assets/images/Jesse-Raitapuro-Personal-Trainer-Jyvaskyla.png" width="600" />	
					<p class="contact">Moikka! Joko olet valmis mukaan remmiin?💪</p>
						<div class="services__links">
							<a class="btn-primary button" href="/ota-yhteytta/">Ota yhteyttä</a>
						</div>
					</div> -->
			</div>

		</div>
	</div>
</template>

<script>

import ThemeLine from '~/components/ThemeLine.vue'
import ReadMoreButton from '~/components/ReadMoreButton.vue'


export default {
	components: {
		ThemeLine,
		ReadMoreButton,
	}
}


</script>


<style scoped lang="scss">
.main-service {
	// font-size: 2em;
	// color: var(--color-primary);
}

.main-service-text {}

.services {

	&__action {
		display: flex;
		align-items: center;
		margin: 0 auto 2.9rem auto;
	}

	@media (max-width: var(--container-ipad-landscape)) {
		&__action {
			margin-left: 0;
		}
	}

	h2 {
		display: inline-block;
	}

	h3 {
		margin-top: 0;
	}

	h4,
	h5 {
		margin-top: 0.5rem;
	}

	margin: 0 auto;
	// padding: calc(var(--space) / 2) 0;

	&__bg {}

	&__image {
		filter: grayscale(0.3);
		border-radius: 1rem;
		margin-bottom: 1em;
	}

	&__intro {
		opacity: .8;
	}

	&__site-title {
		font-size: 1.5em;
	}

	&__secondary_text {
		margin: 1em 0 1em 0;
	}

	&__links {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 1rem 0 1rem 0;

		a:first-of-type {
			// margin-right: 1rem;
		}
	}


	&__link-icon {
		position: absolute;
		right: 0;
		top: 50%;
		width: 2.5rem;
		height: 2.5rem;
	}

	&__cta-link {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.0;
		overflow: hidden;
		text-indent: -9999px;
		z-index: 0;
	}

	&__text {
		text-align: center;
	}

	&__card {
		// background-color: #fff;
		// border-radius: 6px;
		// box-shadow: 0 29px 30px -25px rgb(0 0 0 / 7%);

		@media (max-width: 480px) {
			padding: 2em 1.5em;
		}
	}


	&__service_content {
		flex: 1;
	}

	&__small_text{
		font-size: var(--font-size-15);
		color: var(--color-title);
	}

}

@media (max-width: 770px) {
	.services {
		&__links {
			flex-direction: column;

			a {
				margin: 1rem;
			}
		}
	}
}
</style>
