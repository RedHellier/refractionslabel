<script lang="ts">
	import HighlightedHeader from '$lib/components/HighlightedHeader.svelte';

	type Insight = {
		attributes: {
			title: string;
			date: string;
			description: string;
			slug: string;
		};
	};

	let insightsFiles: Array<Insight> = $state([]);

	const insightsImport = import.meta.glob('$lib/_content/insights/*.md');
	for (const path in insightsImport) {
		insightsImport[path]().then((mod) => {
			insightsFiles.push(mod as Insight);
		});
	}
</script>

<div class="main-content">
	<HighlightedHeader headerText="INSIGHTS"></HighlightedHeader>

	{#each insightsFiles as file}
		<h2>{file.attributes.title}</h2>
		<p>{file.attributes.date}</p>
		<p>{file.attributes.description}</p>
		<a href={`/insights/${file.attributes.slug}`}>Read more</a>
	{/each}
</div>
