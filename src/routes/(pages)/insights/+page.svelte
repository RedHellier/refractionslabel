<script lang="ts">
	import HighlightedHeader from '$lib/components/HighlightedHeader.svelte';
	import { format } from 'date-fns';

	type InsightAttributes = {
		title: string;
		date: string;
		author: string;
		description: string;
	};

	type Insight = {
		slug: string;
		attributes: InsightAttributes;
		markdown: string;
	};

	let insightsFiles: Array<Insight> = $state([]);

	const insightsImport = import.meta.glob('$lib/_content/insights/*.md');
	for (const path in insightsImport) {
		insightsImport[path]().then((mod) => {
			const slug = path.split('/').at(-1)?.replace('.md', '') || '';
			const { attributes, markdown } = mod as Insight;
			insightsFiles.push({ slug, attributes, markdown } as Insight);
		});
	}
</script>

<div class="main-content insights-content">
	<HighlightedHeader headerText="INSIGHTS"></HighlightedHeader>

	<div class="insights-list">
		{#each insightsFiles as file}
			<button
				class="insight-item"
				onclick={() => (window.location.href = '/insights/' + file.slug)}
			>
				<div class="insight-image-container">
					<img
						class="insight-image"
						src="/WebBackgrounds/AboutBackground.jpg"
						alt="Image for {file.attributes.title}"
					/>
				</div>
				<div class="insight-info-container">
					<h3 class="insight-title">{file.attributes.title}</h3>
					<div class="author-and-date">
						<p class="author">{file.attributes.author}</p>
						<p class="date">{format(file.attributes.date, 'do MMMM yyyy')}</p>
					</div>
					<p class="description">{file.attributes.description}</p>
				</div>
			</button>
		{/each}
	</div>
</div>

<style>
	.insights-content {
		width: 72vw;
		padding: 2.5rem 2rem 2.5rem 2rem;
	}

	.insights-list {
		display: flex;
		justify-content: space-between;
		align-items: stretch;
		flex-wrap: wrap;
		width: 100%;
		gap: 2rem;
	}

	.insight-item {
		background-color: white;
		position: relative;
		display: flex;
		gap: 1rem;
		justify-content: center;
		font-family: 'podium-sharp-variable', sans-serif;
		font-variation-settings:
			'wght' 700,
			'wdth' 50;
		font-size: 80%;
		color: black;
		width: 100%;
		padding: 3rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
		min-width: 260px;
		height: 300px;
		max-height: 300px;
	}

	.insight-image-container {
		height: 100%;
		width: 50%;
		overflow: hidden;
	}

	.insight-info-container {
		display: flex;
		width: 50%;
		justify-content: flex-start;
		flex-direction: column;
		padding: 0 1rem;
	}

	.insight-title {
		text-align: left;
		margin: 0;
		margin-block-start: 0;
		margin-block-end: 0;
	}

	.author-and-date {
		display: flex;
		color: black;
		justify-content: space-between;
	}

	.author {
		margin-right: 2rem;
	}

	.description {
		text-transform: none;
		text-align: left;
		margin-top: 1.5rem;
	}

	p {
		color: black;
		font-size: 1.2rem;
	}

	@media (max-width: 900px) {
		.insight-item {
			width: 90%;
			min-width: unset;
		}
		.insights-list {
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		}
	}

	@media (max-width: 600px) {
		.insights-content {
			padding: 0 0.5rem;
		}
		.insight-item {
			width: 100%;
			padding: 0.7rem;
		}

		.insight-image-container {
			display: none;
		}
		.author-and-date {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.2rem;
		}
	}
</style>
