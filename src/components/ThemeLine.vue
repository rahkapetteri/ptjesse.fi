<template>
	<div class="theme-line"></div>
</template>

<script>
export default {
	props: ['LineColor'],
  
}
</script>

<style lang="scss">
	.theme-line{
		border: none;
		border-top: .2rem solid var(--color-secondary);
		height: 1px;
		width: 110px;
		margin:1.5rem 0;
		border-radius: .5rem;
	}

</style>