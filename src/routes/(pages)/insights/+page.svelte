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
			<div class="insight-item">
				<h3>{file.attributes.title}</h3>
				<div class="author-and-date">
					<p class="author">{file.attributes.author}</p>
					<p class="date">{format(file.attributes.date, 'do MMMM yyyy')}</p>
				</div>
				<p class="description">{file.attributes.description}</p>
				<a href={`/insights/${file.slug}`}>Read More</a>
			</div>
		{/each}
	</div>
</div>

<style>
	.insights-content {
		width: 100%;
	}

	.insights-list {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 100%;
		gap: 2rem;
	}

	.insight-item {
		background-color: white;
		position: relative;
		color: black;
		width: 43%;
		margin: 1rem 0;
		padding: 1rem;
		margin-bottom: 1rem;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
		min-width: 260px;
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
		margin-bottom: 3rem;
	}

	a {
		padding: 0.5rem 1rem;
		margin: 3rem 0;
		position: absolute;
		bottom: -2.2rem;
		right: 1rem;
		font-size: 1.2rem;
		background-color: black;
		color: white;
		border-radius: 4px;
		text-decoration: none;
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
			margin: 0.5rem 0;
			padding: 0.7rem;
		}
		.author-and-date {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.2rem;
		}
		a {
			position: static;
			margin: 1rem 0 0 0;
			width: 100%;
			display: block;
			text-align: center;
		}
	}
</style>
