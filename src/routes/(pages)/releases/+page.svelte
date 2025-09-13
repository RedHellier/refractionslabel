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

<div class="main-content">
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
	.releases-list {
		display: flex;
		flex-wrap: wrap;
		gap: 10rem;
		justify-content: center;
		align-items: center;
	}

	.release-item {
		background-color: white;
		border-radius: 0;
		padding: 1rem;
		text-align: center;
		width: 20vw;
		font-family: 'podium-sharp-variable', sans-serif;
		font-variation-settings:
			'wght' 700,
			'wdth' 50;
		font-size: 80%;
		color: white;
		letter-spacing: 0.25rem;
	}

	.release-artwork {
		width: 80%;
		height: auto;
		border: 1px solid rgba(3, 24, 3, 0.2);
		margin: 1.5rem;
	}

	.release-artist {
		font-size: 4rem;
		color: rgb(3, 24, 3);
	}

	.release-title {
		font-size: 1.5rem;
		padding: 0.5rem 0;
		color: rgb(3, 24, 3);
	}
</style>
