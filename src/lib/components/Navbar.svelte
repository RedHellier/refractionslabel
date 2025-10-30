<script lang="ts">
	let atTop = $state(true);
	let menuOpen = $state(false);
	const isScrollAtTop = () => {
		atTop = document.body.scrollTop < 50 && document.documentElement.scrollTop < 50;
	};
</script>

<svelte:window onscroll={isScrollAtTop} />

<header class={'navbar ' + (atTop ? 'full' : 'minimised')}>
	<a href="/" aria-label="Home"><div class={'logo ' + (!atTop && 'minimised')}></div></a>
	<button
		class="menu-toggle"
		aria-label="Toggle menu"
		aria-expanded={menuOpen}
		onclick={() => (menuOpen = !menuOpen)}
	>
		<span></span>
		<span></span>
		<span></span>
	</button>
	<nav class:open={menuOpen}>
		<a href="/releases" onclick={() => (menuOpen = false)}>RELEASES</a>
		<a href="/insights" onclick={() => (menuOpen = false)}>INSIGHTS</a>
		<a href="/about" onclick={() => (menuOpen = false)}>ABOUT</a>
		<a href="/contact" onclick={() => (menuOpen = false)}>CONTACT</a>
	</nav>
</header>

<style>
	.navbar {
		overflow: hidden;
		background-color: rgba(3, 24, 3, 0.8);
		transition: 0.4s;
		position: fixed;
		width: 100%;
		max-width: 100vw;
		left: 0;
		right: 0;
		box-sizing: border-box;
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
		margin-left: 2%;
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

	/* Mobile menu toggle (hidden on desktop) */
	.menu-toggle {
		display: none;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 8px;
		margin-right: 12px;
	}

	.menu-toggle span {
		display: block;
		width: 26px;
		height: 2px;
		margin: 5px 0;
		background: #fff;
		transition:
			transform 0.3s ease,
			opacity 0.3s ease;
	}

	/* Mobile styles */
	@media (max-width: 768px) {
		/* Allow dropdown to render below fixed header */
		.navbar {
			overflow: visible;
		}

		/* Reduce logo width slightly on small screens */
		.logo {
			width: 160px;
		}

		.menu-toggle {
			display: block;
		}

		/* Hide inline nav by default on mobile */
		nav {
			display: none;
		}

		/* Show dropdown when open */
		nav.open {
			display: flex;
			flex-direction: column;
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			background-color: rgba(3, 24, 3, 0.95);
			gap: 0;
		}

		nav.open a {
			padding: 14px 20px;
			margin: 0;
			border-top: 1px solid rgba(255, 255, 255, 0.1);
		}
	}
</style>
