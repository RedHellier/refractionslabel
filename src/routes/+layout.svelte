<script lang="ts">
	import '../app.css';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	let { children } = $props();

	let bgURL = $state('url(/WebBackgrounds/RefractionsBackground.jpg)');
	let pageTitle = $state('Refractions');

	afterNavigate(() => {
		window.scrollTo(0, 0);
		pageTitle = page.url.pathname.split('/')[1] || 'Refractions';
		pageTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);
		bgURL = `url(/WebBackgrounds/${pageTitle}Background.jpg)`;
	});
</script>

<svelte:head><title>{pageTitle}</title></svelte:head>

<div class="background" style:background-image={bgURL}></div>
<div class="container">
	{@render children()}
</div>

<style>
	.background {
		position: fixed;
		margin: 0;
		padding: 0;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: white;
		z-index: -1;
		background-size: cover;
		background-position: top center;
		background-repeat: no-repeat;
		transition: width 0.3s;
	}

	@media (max-width: 1200px) {
		.background {
			width: 100vw;
		}
	}
	@media (max-width: 900px) {
		.background {
			width: 100vw;
		}
	}
	@media (max-width: 600px) {
		.background {
			width: 100vw;
			overflow: hidden;
			background-position: left top;
		}
	}
</style>
