<template>
	<div class="author">
		<div class="section-container">
			<div class="author__bg cols">
				<div class="author__header col">
					<h1>Vaikutanko sopivalta valmentajalta juuri sinulle?</h1>
					<ThemeLine style="border-color: var(--color-primary)" />
					<p>
						Jos haluat asiantuntevaa näkemystä treenien optimointiin tai ruokavalion siivoamiseen, niin
						laita viestiä!</p>
					<a class="button btn-primary" href="mailto:jesse.raitapuro@pm.me">jesse.raitapuro@pm.me</a>
				</div>
				<div class="author__image_bg col">
					<g-image class="author__image" alt="Kuvassa Jesse Raitapuro kädet puuskassa huppari päällä."
						src="~/assets/images/Jesse-Raitapuro-personal-trainer-alt.jpg" width="1000" />

				</div>

			</div>
		</div>
	</div>
</template>

<script>

import ContactButton from '~/components/ContactButton.vue'
import ThemeLine from '~/components/ThemeLine.vue'

export default {
	components: {
		ThemeLine,
		ContactButton
	},
}

</script>


<style scoped lang="scss">
.author {

	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-top: 1.5rem;
	}


	&__image {
		margin-bottom: 1em;
		border-radius: 0.25rem 0.25rem 0.25rem 0.25rem;
		border-bottom-left-radius: 12rem;
		float: right;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
	}

	&__text {
		padding: 0 2em;
	}

	&__intro {
		opacity: .8;
	}

	&__header{
		margin-bottom:1.2rem;
	}

	&__site-title {
		font-size: 1.5em;
	}

	&__links {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin: 2em 0;
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
