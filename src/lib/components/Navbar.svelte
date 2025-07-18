<script lang="ts">
	let atTop = $state(true);
	const isScrollAtTop = () => {
		atTop = document.body.scrollTop < 50 && document.documentElement.scrollTop < 50;
	};
</script>

<svelte:window onscroll={isScrollAtTop} />

<header class={'navbar ' + (atTop ? 'full' : 'minimised')}>
	<a href="/" aria-label="Home"><div class={'logo ' + (!atTop && 'minimised')}></div></a>
	<nav>
		<a href="/contact">CONTACT</a>
		<a href="/releases">RELEASES</a>
		<a href="/insights">INSIGHTS</a>
		<a href="/socials">SOCIALS</a>
	</nav>
</header>

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
		padding: 0 30px;
	}

	.minimised nav a {
		margin: 0 1rem;
		font-size: 1.5rem;
	}
</style>
