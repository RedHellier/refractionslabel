<script>
	import '../styles/app.css';
	//import { getBGImage, scrollToTop } from '$lib/utils';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	let { children } = $props();
	let bgURL = $state('url(/WebBackgrounds/Background.jpg)');

	afterNavigate(() => {
		window.scrollTo(0, 0);
		bgURL = `url(/WebBackgrounds/${page.url.pathname.slice(1)}Background.jpg)`;
	});
</script>

<div class="background" style:background-image={bgURL}></div>
<div class="container"></div>
{@render children()}

<style>
	.background {
		position: fixed;
		margin: 0;
		padding: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		background-color: white;
		z-index: -1;
	}
</style>
