<template>
	<g-link class="readmore__link button" :to="urlto" >{{ buttontext }}</g-link>
</template>

<script>
export default {
	props: ['buttontext', 'urlto']
}
</script>

<style scoped lang="scss">
	.readmore__link{
		// padding: 1rem 2rem;
		// border: none;
		// border-radius: .5rem;
		// text-decoration: none;
		// color: var(--color-primary);
		// font-size: 1rem;
		// font-weight: 700;
		// letter-spacing: .2rem;
		// text-align: center;
		// outline: none;
		// cursor: pointer;
		// transition: .2s ease-in-out;
		// background: linear-gradient(315deg, #171718, #1b1b1d);
		// box-shadow:  -4px -4px 8px #121214,
		// 			4px 4px 8px #202022;
					
		}
</style>