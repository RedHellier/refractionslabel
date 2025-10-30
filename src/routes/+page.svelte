<script lang="ts">
	import EmailForm from '$lib/components/EmailForm.svelte';
	import { scrollToTop } from '$lib/utils';
	scrollToTop();
</script>

<div class="main-content">
	<img
		alt="Main Brand Logo and Title"
		src="/Logos/RefractionsLogoWhite.svg"
		width="400"
		class="main-logo"
	/>

	<nav class="main-nav">
		<a href="/releases">RELEASES</a>
		<a href="/insights">INSIGHTS</a>
		<a href="/about">ABOUT</a>
		<a href="/contact">CONTACT</a>
	</nav>

	<EmailForm />

	<p class="copyright">
		Refractions<span class="registered">®</span> is a registered trademark of Refractions Label Ltd.
		All rights reserved.
	</p>
</div>

<style>
	img.main-logo {
		margin-top: 3rem;
		max-width: 90vw;
		height: auto;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	nav.main-nav {
		margin-top: 2em;
		margin-bottom: 20em;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.5rem;
	}

	p.copyright {
		margin-top: 5rem;
		font-size: 0.8rem;
		text-align: center;
	}
	.registered {
		font-family: serif;
	}

	@media (max-width: 900px) {
		img.main-logo {
			margin-top: 8rem;
			max-width: 70vw;
		}
		nav.main-nav {
			margin-bottom: 8em;
			gap: 1rem;
		}
	}

	@media (max-width: 600px) {
		img.main-logo {
			margin-top: 3rem;
			max-width: 80vw;
		}
		nav.main-nav {
			flex-direction: column;
			align-items: center;
			margin-bottom: 3em;
			gap: 0.5rem;
		}
		p.copyright {
			font-size: 0.7rem;
			margin-top: 2rem;
		}
	}
</style>
