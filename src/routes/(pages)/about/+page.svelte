<script lang="ts">
	import HighlightedHeader from '$lib/components/HighlightedHeader.svelte';
</script>

<div class="main-content about-content">
	<HighlightedHeader headerText="ABOUT"></HighlightedHeader>

	<div class="associations">
		<h2>Associations</h2>
		<a class="association-link" href="https://camdencollective.co.uk/" target="_blank">
			<img
				src="/Logos/camden_collective.webp"
				alt="Camden Collective Logo"
				class="association-img"
			/>Camden Collective
		</a>
		<a class="association-link" href="https://subvert.fm/" target="_blank">
			<img src="/Logos/SubvertWhite.png" alt="Subvert Logo" class="association-img" />Subvert - The
			Collectively Owned Music Marketplace
		</a>
		<a class="association-link" href="https://camdencollective.co.uk/" target="_blank">
			<img src="/Logos/MVPWHITE.png" alt="MVP Logo" class="association-img" />MusicVenueProperties |
			Conserving & Preserving Grassroots Music Venues
		</a>
	</div>
</div>

<style>
	h2 {
		margin: 2rem 0 1rem 0;
	}

	.about-content {
		width: 72vw;
		padding: 2.5rem 2rem 2.5rem 2rem;
	}

	.associations {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin-top: 3rem;
		width: 100%;
	}

	.association-link {
		display: flex;
		align-items: center;
		margin: 3rem 0;
		font-size: 1.2rem;
		text-decoration: none;
		color: white;
		gap: 1rem;
	}

	.association-img {
		height: 3rem;
		width: auto;
		margin-right: 1rem;
		max-width: 40vw;
	}

	@media (max-width: 900px) {
		.association-link {
			font-size: 1rem;
			margin: 2rem 0;
		}
		.association-img {
			height: 2.2rem;
			max-width: 60vw;
		}
	}

	@media (max-width: 600px) {
		.about-content {
			padding: 0 0.5rem;
		}
		.association-link {
			font-size: 0.9rem;
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;
		}
		.association-img {
			margin-right: 0;
			margin-bottom: 0.3rem;
			height: 1.5rem;
			max-width: 80vw;
		}
	}
</style>
