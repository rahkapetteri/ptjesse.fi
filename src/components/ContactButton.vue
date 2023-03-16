<template>
	<a class="contact__link button" href="/">
		Ota yhteyttä 
			<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			>
			<path
				d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
				fill="currentColor"
			/>
			</svg>
	</a>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
	.contact__link{
		margin:0;
		padding:0.75em 1em;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 0.25rem;
		background-color: var(--color-primary-light);
		border: 1px solid hsl(250, 35%, 15%);
		color: hsl(250, 35%, 15%);
		text-decoration: none;
		}
</style>