<script lang="ts">
	import HighlightedHeader from '$lib/components/HighlightedHeader.svelte';
	import { format } from 'date-fns';
	const { data } = $props();
	const { title, author, date, description } = data.attributes;
	const text = data.text;
</script>

<div class="main-content">
	<button class="back-button" onclick={() => (window.location.href = '/insights')}
		>← Back to insights</button
	>
	<div class="title-container">
		<HighlightedHeader headerText={title}></HighlightedHeader>
	</div>
	<div class="author-and-date">
		<p class="author">{author}</p>
		<p class="date">{format(date, 'do MMMM yyyy')}</p>
	</div>
	<p class="description">{description}</p>
</div>

<style>
	.main-content {
		background-color: white;
		color: rgb(3, 24, 3);
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.author-and-date {
		display: flex;
		color: black;
		justify-content: space-between;
		margin-top: 1rem;
		width: 90%;
	}

	.back-button {
		background-color: rgb(3, 24, 3);
		color: white;
		border-radius: 0;
		font-size: 1.2rem;
		cursor: pointer;
		margin-bottom: 2rem;
		position: absolute;
		top: 1rem;
		left: 1rem;
	}

	.description {
		text-transform: none;
		margin-top: 1rem;
		width: 90%;
	}

	.title-container {
		width: 90%;
		display: flex;
		justify-content: center;
		background-color: rgb(3, 24, 3);
		font-size: 8rem;
		margin-top: 5rem;
		margin-bottom: 1rem;
	}

	p {
		color: rgb(3, 24, 3);
	}
</style>
