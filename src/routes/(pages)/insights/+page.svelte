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

<div class="main-content">
	<HighlightedHeader headerText="INSIGHTS"></HighlightedHeader>

	<div class="insights-list">
		{#each insightsFiles as file}
			<div class="insight-item">
				<h3>{file.attributes.title}</h3>
				<div class="author-and-date">
					<p class="author">{file.attributes.author}</p>
					<p class="date">{format(file.attributes.date, 'do MMMM yyyy')}</p>
				</div>
				<p class="description">{file.attributes.description}</p>
			</div>
		{/each}
	</div>
</div>

<style>
	.insights-list {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 100%;
	}

	.insight-item {
		background-color: white;
		color: black;
		width: 43%;
		margin: 1rem;
		padding: 1rem;
		margin-bottom: 1rem;
	}

	.author-and-date {
		display: flex;
		color: black;
		justify-content: space-between;
		margin-top: 1rem;
	}

	.author {
		margin-right: 2rem;
	}

	.description {
		text-transform: none;
		margin-top: 1rem;
	}

	p {
		color: black;
		font-size: 1.2rem;
	}
</style>
