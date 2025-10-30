<script lang="ts">
	import HighlightedHeader from '$lib/components/HighlightedHeader.svelte';
	import { format } from 'date-fns';

	type ReleaseAttributes = {
		title: string;
		date: string;
		artist: string;
		description: string;
		cover_art: string;
		buy_link: string;
		embed_snippet: string;
	};

	type Release = {
		slug: string;
		attributes: ReleaseAttributes;
		markdown: string;
	};

	let releasesFiles: Array<Release> = $state([]);

	const releasesImport = import.meta.glob('$lib/_content/releases/*.md');
	for (const path in releasesImport) {
		releasesImport[path]().then((mod) => {
			const slug = path.split('/').at(-1)?.replace('.md', '') || '';
			const { attributes, markdown } = mod as Release;
			console.log(markdown);
			releasesFiles.push({ slug, attributes, markdown } as Release);
		});
	}
</script>

<div class="main-content releases-content">
	<HighlightedHeader headerText="RELEASES"></HighlightedHeader>
	<div class="releases-list">
		{#each releasesFiles as file}
			<button
				class="release-item"
				onclick={() => (window.location.href = '/releases/' + file.slug)}
			>
				<img
					class="release-artwork"
					src={file.attributes.cover_art}
					alt="Cover art for {file.attributes.title}"
				/>
				<h2 class="release-artist">{file.attributes.artist}</h2>
				<p class="release-title">{file.attributes.title}</p>
			</button>
		{/each}
	</div>
</div>

<style>
	.releases-content {
		width: 72vw;
		padding: 2.5rem 2rem 2.5rem 2rem;
	}

	.releases-list {
		display: flex;
		flex-wrap: wrap;
		gap: 6rem;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.release-item {
		background-color: white;
		padding: 1rem;
		text-align: center;
		width: 20vw;
		font-family: 'podium-sharp-variable', sans-serif;
		font-variation-settings:
			'wght' 700,
			'wdth' 50;
		color: white;
		letter-spacing: 0.25rem;
		min-width: 220px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
		transition: box-shadow 0.2s;
	}
	.release-item:hover {
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
	}

	.release-artwork {
		width: 80%;
		height: auto;
		border: 1px solid rgba(3, 24, 3, 0.2);
		margin: 1.5rem auto;
		display: block;
		max-width: 300px;
	}

	.release-artist {
		color: rgb(3, 24, 3);
	}

	.release-title {
		padding: 0.5rem 0;
		color: rgb(3, 24, 3);
	}

	@media (max-width: 1200px) {
		.releases-list {
			gap: 3rem;
		}
		.release-item {
			width: 30vw;
		}
	}

	@media (max-width: 900px) {
		.releases-list {
			gap: 1.5rem;
		}
		.release-item {
			width: 45vw;
			min-width: 160px;
		}
	}

	@media (max-width: 600px) {
		.releases-content {
			padding: 0 0.5rem;
		}
		.releases-list {
			flex-direction: column;
			gap: 1rem;
		}
		.release-item {
			width: 100%;
			min-width: unset;
			padding: 0.7rem;
		}
	}
</style>
