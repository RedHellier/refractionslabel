<script lang="ts">
	import { format } from 'date-fns';
	const { data } = $props();
	const { title, artist, date, cover_art, buy_link, embed_snippet, description } = data.attributes;
</script>

<div class="main-content release-detail-content">
	<button class="back-button" onclick={() => (window.location.href = '/releases')}
		>← Back to releases</button
	>
	<p class="release-date">{format(date, 'do MMMM yyyy')}</p>

	<div class="cover-art">
		<img src={cover_art} alt="Cover art for {title}" />
	</div>

	<div class="info">
		<h1>{title}</h1>
		<h2>{artist}</h2>
		<p>{@html description}</p>
	</div>

	<div class="embed-container">
		{@html embed_snippet}
	</div>

	<div class="buy-link">
		<a href={buy_link} target="_blank" rel="noopener noreferrer">Buy / Stream</a>
	</div>
</div>

<style>
	.release-detail-content {
		background-color: white;
		color: rgb(3, 24, 3);
		position: relative;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas:
			'cover info'
			'embed buy';
		gap: 2rem;
		width: 72vw;
		padding: 7.5rem 5rem 3rem 5rem;
		align-items: start;
		justify-items: start;
	}

	.cover-art {
		grid-area: cover;
	}

	.info {
		grid-area: info;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.embed-container {
		grid-area: embed;
	}

	.buy-link {
		grid-area: buy;
		display: flex;
		align-items: flex-start;
		max-height: 42px;
	}

	img,
	.embed-container {
		width: 100%;
		height: auto;
	}

	img {
		border: 1px solid rgba(3, 24, 3, 0.2);
	}

	.back-button {
		background-color: rgb(3, 24, 3);
		color: white;
		border-radius: 0;
		font-size: var(--fs-sm);
		cursor: pointer;
		margin-bottom: 2rem;
		position: absolute;
		top: 2rem;
		left: 2.5rem;
		z-index: 2;
	}

	.release-date {
		font-size: var(--fs-sm);
		position: absolute;
		top: 3rem;
		right: 5rem;
		color: rgb(3, 24, 3);
	}

	p {
		color: rgb(3, 24, 3);
	}

	.buy-link a {
		display: flex;
		background-color: rgb(3, 24, 3);
		color: white;
		height: 42px;
		max-height: 42px;
		text-align: center;
		align-items: center;
		padding: 0 1rem;
		text-decoration: none;
		font-size: var(--fs-ml);
		width: fit-content;
		border-radius: 0;
		cursor: pointer;
		border: 0;
	}

	@media (max-width: 1200px) {
		.release-detail-content {
			grid-template-columns: 1fr;
			grid-template-areas:
				'cover'
				'info'
				'embed'
				'buy';
			padding: 9rem 5rem 3rem 5rem;
		}
		.cover-art,
		.embed-container,
		.info,
		.buy-link {
			margin: 0.2rem 0;
		}

		.release-date {
			top: 7rem;
		}
	}

	@media (max-width: 600px) {
		.cover-art,
		.embed-container,
		.info,
		.buy-link {
			margin: 0.1rem 0;
			padding: 0;
		}
		.info h1 {
			font-size: var(--fs-xxl);
		}
		.info h2 {
			font-size: var(--fs-xl);
		}
		.buy-link a {
			font-size: var(--fs-md);
			height: 36px;
		}
	}
</style>
