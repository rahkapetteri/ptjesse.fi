<template>
	<div class="comments comments__bg">
		<div class="container">
			<div class="comments__icon"></div>
			<div class="comments__text slider__content">
				<!-- <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M17 9H7V7H17V9Z" fill="currentColor" />
				<path d="M7 13H17V11H7V13Z" fill="currentColor" />
				<path fill-rule="evenodd" clip-rule="evenodd"
					d="M2 18V2H22V18H16V22H14C11.7909 22 10 20.2091 10 18H2ZM12 16V18C12 19.1046 12.8954 20 14 20V16H20V4H4V16H12Z"
					fill="currentColor" />
			</svg> -->
					<div class="slick-controls">
						<div class="slick-button">
							<button @click="showPrev()" aria-label="Edellinen dia asiakaskommenteista"
								class="slick-prev slick-arrow" style="">
								<svg width="48" height="48" viewBox="0 0 24 24" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
										fill="currentColor" />
								</svg> </button>
						</div>
						<div class="slick-counter">{{ sliderPageIndex + 1 }} / 3</div>
						<div class="slick-button">
							<button @click="showNext()" aria-label="Seuraava dia asiakaskommenteista"
								class="slick-next slick-arrow slick-button" style=""><svg width="48" height="48" viewBox="0 0 24 24" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
										fill="currentColor" />
								</svg> </button>
						</div>
					</div>
			</div>
		</div>
		<div class="container">
			<VueSlickCarousel ref="carousel" @afterChange="afterPageChange" class="slick-slider" v-bind="slickSettings">

				<div class="">
					<div class="comment">
						<p>Ohjauskerrat tuntuivat rennoilta ja oli mukava jutella ohjaajan kanssa kuntosaliin ja muuhun
							elämään liittyviä asioita. Lämmittelyharjoitukset valmistelivat tehokkaasti treeniin.
							Ohjaaja
							neuvoi minulle vaihtoehtoisia liikkeitä, jos esimerkiksi laite oli varattu tai jos en
							pystynyt
							tekemään jotain tiettyä liikettä. Sain ohjausta liikkeiden oikeaoppiseen tekemiseen ja
							lihasten
							käyttöön, millä oli iso ja positiivinen vaikutus tuloksiin.<br><br>
							Kaiken kaikkiaan kokemus oli todella rohkaiseva ja onnistunut.</p>
							<p class="headerline">Palaute kuntosaliohjausten sarjasta.</p>
					</div>
				</div>
				<div>
					<div class="comment">
						<p>Oli todella mukavaa harjoitella ja uskon tästä tulevan pysyvä harrastus. Opin tekniikat
							ja tiedän mitä niissä pitää parantaa. Vaikka tein pienillä painoilla, niin sait
							tarvittaessa haastettua minua pidemmillä sarjoilla tai suuremmilla painoilla. Kävi
							selväksi, että jaksan enemmän kuin luulen. Mietin että pitäisi etsiä salikaveri, jonka
							kanssa käydä, niin olisi helpompi haastaa itseä. Sait osoitettua, että salilla on hyvä
							henki, kun moikkailit muita. Otan mallia salikulttuurista.</p>
							<p class="headerline">Palaute kuntosalivalmennuksesta.</p>
					</div>
				</div>


				<div>
					<div class="comment">
						<p>Ohjaustyylisi on lempeä ja asiakasta kuunteleva. Et kuitenkaan päästä liian helpolla
							vaan neuvot aina tekemään liikkeet viimeisen päälle oikein, ja aika monta kertaa sai
							tehdä vielä pari ylimääräistä toistoakin. Sain täsmäliikkeet omalle kropalle selkäkivut
							huomioiden, ja hyvin on poltellut lihaksia treenejä seuraavina päivinä. Kiitos! </p>
							<p class="headerline">Palaute kuntosaliohjauksesta.</p>
					</div>
				</div>


			</VueSlickCarousel>
		</div>
		<!-- <div class="comments__character"></div> -->
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

import ThemeLine from '~/components/ThemeLine.vue'

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
	components: {
		ThemeLine,
		VueSlickCarousel
	},
	data() {
		return {
			sliderPageIndex: 0,
			slickSettings: {
				arrows: false,
				dots: false,
				// cssEase: 'ease-out',
				speed: 300,
				slidesToShow: 1,
				infinite: false,
				// variableWidth: true,
				// slidesToScroll: 1,
				// infinite: true,
				// fade: false,
				// draggable: false,
			},
		}
	},
	methods: {
		afterPageChange(page) {
			this.sliderPageIndex = page;
		},
		showNext() {
			this.$refs.carousel.next()
		},
		showPrev() {
			this.$refs.carousel.prev()
		},
	},

	computed: {
		currentPage() {
			// always display 1 if page index is 0
			if (this.sliderPageIndex == 0) {
				return 1;
			} else {
				// compensate for slidesToScroll settings and compensate the shift by 1
				return this.sliderPageIndex / this.slickSettings.slidesToScroll + 1;
			}
		},
	}
}

</script>


<style scoped lang="scss">
.comment {
	// font-style: italic;
	margin: var(--margin-between-paragraphs);
	background-color: var(--color-dark);
	// width: 300px;
	min-height: 340px;
	padding: 2rem 2.5rem;
	border-radius: 0;
	border: 0.1rem solid #adb3be;

	p {
		font-size: var(--font-size-22);
		color: var(--color-white);
	}

	hr{
		color: var(--color-primary);
		border-color: var(--color-primary);
		background-color: var(--color-primary);
	}
}

p.headerline {
	font-size: var(--font-size-16);
	margin: 0 var(--margin-between-paragraphs);
}

.controls {
	margin: 2.9rem 0;
	max-width: 1000px;
	margin-left: auto;
	margin-right: auto;
	margin: 0 var(--margin-between-paragraphs);
}

.comments {

	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-top: 0rem;
		color: var(--color-title);
	}

	// margin: 0 auto;
	// padding: calc(var(--space) / 2) 0;

	&__bg {
		background-color: var(--color-bg);
		padding: 2rem 0;
		margin: var(--padding-container-vertical) auto;

		.container {
			// max-width: 1000px;
		}
	}


	&__character {
		position: relative;
	}

	&__character:after {
		background-image: url('../assets/svg/person.svg');
		background-repeat: no-repeat;
		background-size: cover;
		content: "";
		width: 500px;
		height: 500px;
		bottom: 0.5rem;
		right: 1rem;
		position: absolute;
		opacity: .1;
	}

	&__image {
		border-radius: 1rem;
		border-bottom-right-radius: 12rem;
	}

	&__text {
		// justify-content: flex-start;
		// display: flex;
		// align-content: center;
		margin: 0 var(--margin-between-paragraphs);
	}

	&__intro {
		opacity: .8;
	}

	&__site-title {
		font-size: 1.5em;
	}

	&__links {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin: 1rem 0 1rem 0;
	}

	&__secondary_text {
		margin: 1em 0 1em 0;
	}

	&__card {
		border-top: 8px solid var(--color-primary);
		border-radius: 4px;
		border-left: 6px solid var(--color-primary);
		box-shadow: 8px 8px 0px 0px rgba(0, 0, 255, .2);
	}

	&__headertext{
		
	}

	&__text {
		justify-content: flex-end;
	}

	&__icon{
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		color: var(--color-fade-text);
	}

	&__icon svg{
		width: 96px;
		height:96px;
		color: var(--color-fade-text);

	}


}

@media (max-width: 770px) {

	.comments {
		&__text {
			padding-top: 1rem;
		}
	}
}

@media (max-width: 480px) {
	.comment {
		p {
			font-size: var(--font-size-15);
		}
	}
}
</style>
