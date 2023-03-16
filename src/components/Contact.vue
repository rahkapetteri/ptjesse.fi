<template>
	<div class="contact section-container">
		<div class="contact__card">
			<h2>Kiinnostuitko valmennuksesta tai räätälöidyistä ohjelmista?</h2>
			<p>Laita viestiä ja katsotaan sinunkin treenisi kuntoon. Voit myös ostaa ohjelman suoraan <a href="https://verkkokauppa.ptjesse.fi">verkkokaupastani</a></p>
			<a class="btn-primary button" href="/yhteys/">Ota yhteyttä</a>
			<div></div>
		</div>
	</div>
</template>

<script>
import ThemeLine from '~/components/ThemeLine.vue'
export default {
	components: {
		ThemeLine
	}
}
</script>

<style scoped lang="scss">

.contact {

	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-top:0;
	}

	&__card {
		background-color: var(--color-background-notice);
		border-radius: 1rem;
		padding: 2em;
		margin: 0 auto;
		text-align: center;
		// background-color: var(--color-secondary);
		// margin:1rem 0;
		// padding:2rem;
	}

	@media (max-width: 480px) {

		&__card {
			padding: 1em;
		}

	}
}
</style>