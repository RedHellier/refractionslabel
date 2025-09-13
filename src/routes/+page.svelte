<script lang="ts">
	import EmailForm from '$lib/components/EmailForm.svelte';
	import { scrollToTop } from '$lib/utils';
	scrollToTop();
</script>

<img alt="Main Brand Logo and Title" src="/Logos/RefractionsLogoWhite.svg" width="400" />

<nav>
	<a href="/releases">RELEASES</a>
	<a href="/insights">INSIGHTS</a>
	<a href="/about">ABOUT</a>
	<a href="/contact">CONTACT</a>
</nav>

<EmailForm />

<p>
	Refractions<span class="registered">®</span> is a registered trademark of Refractions Label Ltd. All
	rights reserved.
</p>

<style>
	img {
		margin-top: 20rem;
	}

	nav {
		margin-top: 2em;
		margin-bottom: 20em;
	}

	p {
		margin-top: 5rem;
		font-size: 0.8rem;
	}
	.registered {
		font-family: serif;
	}
</style>
