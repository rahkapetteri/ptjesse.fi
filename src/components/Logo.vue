<template>
	<g-link class="logo" to="/" aria-label="Siirry etusivulle">
		<!-- toggle-theme to get similar colors for back to blog button-->
		<g-image class="author__image" alt="" src="~/assets/images/pt-jesse-logo.png" />
		<!-- <span class="logo__text toggle-theme">
			Jessen logo tähän
		</span> -->
	</g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>


<script>
export default {
	props: [
		'isBlog'
	],
}
</script>

<style lang="scss">

.logo {
	text-decoration: none;
	color: var(--body-color) !important;
	max-width:140px;

	// &__image {
	// 	vertical-align: middle;
	// 	border-radius: 99px;
	// 	height: 40px;
	// 	width: 40px;
	// 	margin-right: .5em;
	// }
}


@media screen and (max-width: 960px) {
	.logo {
		filter: grayscale(1);
	}
}

@media screen and (max-width: 480px) {
	.logo {
		max-width: 110px;
	}
}


// Extra tiny screens so color picker and menu button are inline
@media screen and (max-width: 320px) {
	.logo {
		max-width: 90px;
	}
}
</style>
