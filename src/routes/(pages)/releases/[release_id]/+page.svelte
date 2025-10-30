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
	<div class="artwork-and-embed">
		<div>
			<img src={cover_art} alt="Cover art for {title}" />
		</div>
		<div class="embed-container">
			{@html embed_snippet}
		</div>
	</div>
	<div class="info-and-buy">
		<h1>{title}</h1>
		<h2>{artist}</h2>
		<p>{@html description}</p>
		<a href={buy_link} target="_blank" rel="noopener noreferrer">Buy / Stream</a>
	</div>
</div>

<style>
	.release-detail-content {
		background-color: white;
		color: rgb(3, 24, 3);
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: flex-start;
		width: 72vw;
		padding: 0 1rem;
	}

	.artwork-and-embed {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		width: 40%;
		margin: 5rem 2rem;
	}

	img,
	.embed-container {
		width: 100%;
		height: auto;
	}

	img {
		border: 1px solid rgba(3, 24, 3, 0.2);
	}

	.info-and-buy {
		width: 55%;
		min-height: 90%;
		padding: 0 2rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		gap: 2rem;
		margin: 5rem 2rem;
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

	.release-date {
		font-size: 1.2rem;
		position: absolute;
		top: 1rem;
		right: 1rem;
		color: rgb(3, 24, 3);
	}

	p {
		color: rgb(3, 24, 3);
	}

	a {
		background-color: rgb(3, 24, 3);
		color: white;
		padding: 1rem 2rem;
		text-decoration: none;
		font-size: 1.5rem;
		width: fit-content;
		border-radius: 0;
		cursor: pointer;
		margin-top: 2rem;
	}

	@media (max-width: 1200px) {
		.release-detail-content {
			flex-direction: column;
			align-items: center;
			padding: 0 0.5rem;
		}
		.artwork-and-embed,
		.info-and-buy {
			width: 90%;
			margin: 2rem 0;
		}
		.release-date {
			position: static;
			margin-bottom: 1rem;
			text-align: right;
			width: 100%;
		}
		.back-button {
			position: static;
			margin-bottom: 1rem;
		}
	}

	@media (max-width: 600px) {
		.release-detail-content {
			padding: 0 0.2rem;
		}
		.artwork-and-embed,
		.info-and-buy {
			width: 100%;
			margin: 1rem 0;
			padding: 0;
		}
		.info-and-buy h1 {
			font-size: 1.2rem;
		}
		.info-and-buy h2 {
			font-size: 1rem;
		}
		a {
			font-size: 1rem;
			padding: 0.7rem 1rem;
		}
	}
</style>
