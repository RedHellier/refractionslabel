<script lang="ts">
	import HighlightedHeader from '$lib/components/HighlightedHeader.svelte';
</script>

<div class="main-content">
	<HighlightedHeader headerText="ABOUT"></HighlightedHeader>

	<div class="associations">
		<h2>Associations</h2>
		<a class="association-link" href="https://camdencollective.co.uk/" target="_blank"
			><img src="/Logos/camden_collective.webp" alt="Camden Collective Logo" />Camden Collective</a
		>
		<a class="association-link" href="https://subvert.fm/" target="_blank"
			><img src="/Logos/SubvertWhite.png" alt="Camden Collective Logo" />Subvert - The Collectively
			Owned Music Marketplace
		</a>
		<a class="association-link" href="https://camdencollective.co.uk/" target="_blank"
			><img src="/Logos/MVPWHITE.png" alt="Camden Collective Logo" />MusicVenueProperties |
			Conserving & Preserving Grassroots Music Venues</a
		>
	</div>
</div>

<style>
	h2 {
		margin: 2rem 0 1rem 0;
	}

	.associations {
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: center;
		text-align: center;
		margin-top: 3rem;
	}

	.association-link {
		display: flex;
		align-items: center;
		margin: 3rem 0;
		font-size: 1.2rem;
		text-decoration: none;
		color: white;
	}

	.association-link img {
		height: 3rem;
		width: auto;
		margin-right: 1rem;
	}
</style>
