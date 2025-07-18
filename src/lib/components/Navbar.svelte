<script lang="ts">
	let atTop = $state(true);
	const isScrollAtTop = () => {
		atTop = document.body.scrollTop < 50 && document.documentElement.scrollTop < 50;
	};
</script>

<svelte:window onscroll={isScrollAtTop} />

<section class={'navbar ' + (atTop ? 'full' : 'minimised')}>
	<div class={'logo ' + (!atTop && 'minimised')}></div>
	<nav>
		<a href="/contact" data-sveltekit-preload-data="off">CONTACT</a>
		<a href="/releases" data-sveltekit-preload-data="off">RELEASES</a>
		<a href="/insights" data-sveltekit-preload-data="off">INSIGHTS</a>
		<a href="/socials" data-sveltekit-preload-data="off">SOCIALS</a>
	</nav>
</section>

<style>
	.navbar {
		overflow: hidden;
		background-color: rgba(3, 24, 3, 0.8);
		transition: 0.4s;
		position: fixed;
		width: 97%;
		top: 0;
		z-index: 99;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.navbar.full {
		padding: 50px 2% 50px 2%;
	}

	.navbar.minimised {
		padding: 10px 2% 10px 2%;
	}

	.logo {
		background-image: url(/Logos/RefractionsLogoWhite.svg);
		background-repeat: no-repeat;
		transition: 0.4s;
		width: 200px;
		height: 40px;
	}

	.logo.minimised {
		background-image: url(/Logos/RefractionsLogomarkWhite.svg);
		width: 40px;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30px;
	}

	nav a {
		transition: 0.4s;
		margin: 0 2rem;
		padding: 0.6em 0.6em;
		border-radius: 10px;
	}

	nav a:hover {
		background-color: white;
		color: rgba(3, 24, 3, 0.8);
	}

	.minimised nav a {
		margin: 0 1rem;
		font-size: 1.5rem;
	}
</style>
