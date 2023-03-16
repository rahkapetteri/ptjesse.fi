<template>
	<div class="comments section-container">
		<div class="comments__bg cols">
			<div class="comments__header col">
				<g-image class="comments__image" alt="hero image" src="~/assets/images/kommentit-kuvitus.jpg"
					width="1000" />
			</div>
			<div class="col">
				<div class="comments__text">
					<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M17 9H7V7H17V9Z" fill="currentColor" />
						<path d="M7 13H17V11H7V13Z" fill="currentColor" />
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M2 18V2H22V18H16V22H14C11.7909 22 10 20.2091 10 18H2ZM12 16V18C12 19.1046 12.8954 20 14 20V16H20V4H4V16H12Z"
							fill="currentColor" />
					</svg>
					<h2>Minusta sanottua</h2>
				</div>
				<div class="comment" style="margin-top:0" >
					<p>"Ohjauskerrat tuntuivat rennoilta ja oli mukava jutella ohjaajan kanssa kuntosaliin ja muuhun
						elämään liittyviä asioita. Lämmittelyharjoitukset valmistelivat tehokkaasti treeniin. Ohjaaja
						neuvoi minulle vaihtoehtoisia liikkeitä, jos esimerkiksi laite oli varattu tai jos en pystynyt
						tekemään jotain tiettyä liikettä. Sain ohjausta liikkeiden oikeaoppiseen tekemiseen ja lihasten
						käyttöön, millä oli iso ja positiivinen vaikutus tuloksiin.<br><br>
						Kaiken kaikkiaan kokemus oli todella rohkaiseva ja onnistunut."</p>
					<p class="headerline"><strong>Palaute kuntosaliohjausten sarjasta.</strong></p>
				</div>
				<div class="comment">
					<p>"Oli todella mukavaa harjoitella ja uskon tästä tulevan pysyvä harrastus. Opin tekniikat ja
						tiedän mitä niissä pitää parantaa. Vaikka tein pienillä painoilla, niin sait tarvittaessa
						haastettua minua pidemmillä sarjoilla tai suuremmilla painoilla. Kävi selväksi, että jaksan
						enemmän kuin luulen. Mietin että pitäisi etsiä salikaveri, jonka kanssa käydä, niin olisi
						helpompi haastaa itseä. Sait osoitettua, että salilla on hyvä henki, kun moikkailit muita. Otan
						mallia salikulttuurista." </p>
					<p class="headerline"><strong>Palaute kuntosalivalmennuksesta.</strong></p>
				</div>
				<div class="comment">
					<p>”Ohjaustyylisi on lempeä ja asiakasta kuunteleva. Et kuitenkaan päästä liian helpolla vaan neuvot
						aina tekemään liikkeet viimeisen päälle oikein, ja aika monta kertaa sai tehdä vielä pari
						ylimääräistä toistoakin. Sain täsmäliikkeet omalle kropalle selkäkivut huomioiden, ja hyvin on
						poltellut lihaksia treenejä seuraavina päivinä. Kiitos!” </p>
					<p class="headerline"><strong>Palaute kuntosaliohjauksesta.</strong></p>
				</div>
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

import ThemeLine from '~/components/ThemeLine.vue'

export default {
	components: {
		ThemeLine,
	},
}

</script>


<style scoped lang="scss">
.comment {
	// font-style: italic;
	margin: 2.9rem 0;
}

.comments {
	color: var(--color-fade-text);

	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-top: 0rem;
		color: var(--color-title);
	}

	p{
		font-size: var(--font-size-16);
		color: var(--color-fade-text);
	}

	&__bg {
		position: relative;
	}

	&__bg::after {
		background-image: url('../assets/svg/person.svg');
		background-repeat: no-repeat;
		background-size: cover;
		content: "";
		width: 500px;
		height: 500px;
		bottom: 0.5rem;
		right: 1rem;
		position: absolute;
		display: block;
		opacity: .1;


	}

	&__image {
		border-radius: 1rem;
		border-bottom-right-radius: 12rem;
		filter: grayscale(.75);
	}

	&__text {
		justify-content: flex-start;
		display: flex;
		align-content: center;
	}

	&__text h2 {
		margin-left: 1rem;
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



}

</style>
