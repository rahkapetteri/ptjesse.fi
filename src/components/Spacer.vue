<template>
	<div class="spacer section-container">
		<div class="spacer__bg">
	</div>
	</div>
</template>
<!-- ["1. Lihasmassan kasvatus", "2. Painon pudottaminen", "3. Hyvinvoinnin parantaminen", "4. Voimatasojen lisääminen"] -->

<script>

import ThemeLine from '~/components/ThemeLine.vue'

export default {
	components: {
		ThemeLine,
	},
}		

</script>


<style scoped lang="scss">

p{
	margin:0;
	display:inline;
}

.spacer {
	h2, h3, h4, h5, h6{
		margin-top: 0rem;
	}

	&__bg {
		// height:100vh;
		// font-size: 1.25em;
		position: relative;
		border-bottom: 3px solid var(--color-fade-text);
	}

	&__text{
		// color: var(--color-fade-text);
		margin-bottom: 2.9rem;
	}

	&__cols {

		h3 {
			// color: var(--color-fade-text);
		}
	}


	// &__checkbox{
	// 	background-image: url('../assets/svg/check.svg');
	// 	background-repeat: no-repeat;
	// 	background-size: cover;
	// 	content: "";
	// 	width: 80px;
	// 	height: 80px;
	// 	margin-bottom: 2.9rem;
	// }

	// &__bg::after{
	// 	background-image: url('../assets/svg/check.svg');
	// 	background-repeat: no-repeat;
	// 	background-size: cover;
	// 	content: "";
	// 	width: 80px;
	// 	height: 80px;
	// 	margin-left: auto;
	// 	margin-right: auto;
	// 	top: -5.5rem;
	// 	left:0;
	// 	right:0;
	// 	position: absolute;
	// 	display: block;
	// 	z-index:200;

	// }

}

</style>
