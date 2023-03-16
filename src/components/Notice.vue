<template>
	<div class="notice section-container">
		<div class="notice__bg">
			<div class="notice__cols cols">
				<div class="notice__header">
					<h2 class="notice__text">Ota tietotaitoni käyttöön ja hyppää suoraan harjoittelun ytimeen.</h2>
				</div>
				<div class="notice__action">
					<a class="btn-secondary button" href="/valmennus/">Tutustu valmennukseen</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import ThemeLine from '~/components/ThemeLine.vue'

export default {
	components: {
		ThemeLine,
	},
}

</script>


<style scoped lang="scss">
p {
	margin: 0;
	display: inline;
}

.notice {

	&__action {
		margin: 2.75rem auto;
		align-self: center;
	}

	&__bg {
		// height:100vh;
		// font-size: 1.25em;
		position: relative;
		border-radius: 1rem;
		padding: 2em;
		background-color: var(--color-background-notice);
	}

	&__text {
		align-items: center;
		margin: 1rem auto;
	}

	&__header {
		align-items: center;
		display: flex;
	}
}


@media (max-width: 1024px) {

	.notice {
		&__action {
			margin: 0 auto 1rem auto;
		}

		&__bg {
			padding: 1em;
		}

		&__text {
			text-align: center;

		}

	&__text {
		align-items: center;
		margin: 2.75rem 0 1rem;
	}
	}
}
</style>
