<script lang="ts">
	let atTop = $state(true);
	const isScrollAtTop = () => {
		console.log(document.documentElement.scrollTop);
		atTop = document.body.scrollTop < 20 && document.documentElement.scrollTop < 20;
	};
</script>

<svelte:window onscroll={isScrollAtTop} />

<section class={'navbar ' + (atTop ? 'full' : 'minimised')}>
	<div class={'logo ' + (!atTop && 'minimised')}></div>
	<nav>
		<a href="/contact">CONTACT</a>
		<a href="/releases">RELEASES</a>
		<a href="/insights">INSIGHTS</a>
		<a href="/socials">SOCIALS</a>
	</nav>
</section>

<style>
	.navbar {
		overflow: hidden;
		background-color: rgba(3, 24, 3, 0.8);
		transition: 0.4s;
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 99;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.navbar.full {
		padding: 50px 40px 50px 20px;
	}

	.navbar.minimised {
		padding: 10px 40px 10px 20px;
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
