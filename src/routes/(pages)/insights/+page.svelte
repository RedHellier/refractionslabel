<script lang="ts">
	import HighlightedHeader from '$lib/components/HighlightedHeader.svelte';

	type InsightAttributes = {
		title: string;
		date: string;
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
				<h2>{file.attributes.title}</h2>
				<p>{file.attributes.date}</p>
				<p>{file.attributes.description}</p>
				<a href={`/insights/${file.slug}`}>Read more</a>
			</div>
		{/each}
	</div>
</div>

<style>
	.insights-list {
		display: flex;
		flex-wrap: wrap;
	}

	.insight-item {
		background-color: #ccc;
		width: 40%;
		margin: 1rem;
		padding: 1rem;
		margin-bottom: 1rem;
	}
</style>
