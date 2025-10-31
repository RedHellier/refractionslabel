<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<div class="page-wrapper">
	<Navbar />
	<div class="content">{@render children()}</div>
	<Footer />
</div>

<style>
	.page-wrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.content {
		flex: 1;
		width: 100%;
		max-width: 100vw;
		left: 0;
		right: 0;
		box-sizing: border-box;
		margin: auto;
		padding: 0 2rem;
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
