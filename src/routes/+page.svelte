<script lang="ts">
	import EmailForm from '$lib/components/EmailForm.svelte';
	import { scrollToTop } from '$lib/utils';
	scrollToTop();
</script>

<img alt="Main Brand Logo and Title" src="/Logos/RefractionsLogoWhite.svg" width="400" />

<nav>
	<a href="/contact">CONTACT</a>
	<a href="/releases">RELEASES</a>
	<a href="/insights">INSIGHTS</a>
	<a href="https://ffm.bio/refractionslabel">SOCIALS</a>
</nav>

<EmailForm />

<style>
	img,
	nav {
		margin: 5em 0;
	}
</style>
