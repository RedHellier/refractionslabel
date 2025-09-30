<script lang="ts">
	import HighlightedHeader from '$lib/components/HighlightedHeader.svelte';
	import { format } from 'date-fns';
	const { data } = $props();
	const { title, author, date, description } = data.attributes;
	const text = data.text;
</script>

<div class="main-content insight-detail-content">
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
	.insight-detail-content {
		background-color: white;
		color: rgb(3, 24, 3);
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 72vw;
		padding: 0 1rem;
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
		z-index: 2;
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

	@media (max-width: 900px) {
		.insight-detail-content {
			padding: 0 0.5rem;
		}
		.title-container {
			font-size: 3rem;
			margin-top: 2rem;
		}
		.author-and-date {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.2rem;
		}
	}

	@media (max-width: 600px) {
		.insight-detail-content {
			padding: 0 0.2rem;
		}
		.title-container {
			font-size: 1.5rem;
			margin-top: 1rem;
			margin-bottom: 0.5rem;
		}
		.back-button {
			font-size: 1rem;
			top: 0.5rem;
			left: 0.5rem;
		}
		.description {
			width: 100%;
			font-size: 1rem;
		}
		.author-and-date {
			width: 100%;
		}
	}
	.author-and-date {
		width: 100%;
	}
</style>
