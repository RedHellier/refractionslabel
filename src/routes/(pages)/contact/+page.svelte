<script lang="ts">
	import EmailFormBlack from '$lib/components/EmailFormBlack.svelte';
	import HighlightedHeader from '$lib/components/HighlightedHeader.svelte';
</script>

<div class="main-content contact-content">
	<HighlightedHeader headerText="CONTACT"></HighlightedHeader>

	<section class="contact-panel">
		<div class="panel-left">
			<h3 class="panel-title">REFRACTIONS LABEL LTD</h3>
			<address class="address-block">
				Collective Auction Rooms<br />
				5-7 Buck Street<br />
				London<br />
				United Kingdom<br />
				NW1 8NJ
			</address>

			<button id="connect" class="social-button">CONNECT ON SOCIALS</button>
		</div>

		<div class="panel-right">
			<div class="contact-emails">
				<p>
					GENERAL:
					<a href="mailto:hello@refractionslabel.com">hello@refractionslabel.com</a>
				</p>
				<p>
					DEMOS:
					<a href="mailto:demo@refractionslabel.com">demo@refractionslabel.com</a>
				</p>
			</div>

			<div class="newsletter">
				<h4>NEWSLETTER</h4>
				<EmailFormBlack />
			</div>
		</div>
	</section>
</div>

<style>
	.contact-content {
		width: 72vw;
		padding: 2.5rem 2rem 2.5rem 2rem;
		height: auto;
	}

	.contact-panel {
		background: white;
		color: rgb(3, 24, 3);
		display: flex;
		gap: 3rem;
		padding: 4rem;
		align-items: flex-start;
		width: 100%;
		box-sizing: border-box;
		height: auto;
	}

	.panel-left,
	.panel-right {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: inherit;
	}

	.panel-title {
		font-size: 6rem;
		margin: 0 0 1rem 0;
	}

	.address-block {
		text-transform: none;
		font-style: normal;
		font-variation-settings:
			'wght' 700,
			'wdth' 50;
		line-height: 1.6;
		margin-bottom: 2rem;
		font-size: 2rem;
	}

	.social-button {
		background: rgba(3, 24, 3, 0.9);
		color: white;
		border: none;
		padding: 1rem 1.5rem;
		font-size: 1rem;
		cursor: pointer;
	}

	.contact-emails p {
		color: rgba(3, 24, 3, 0.9);
		margin: 0 0 1rem 0;
		font-size: 1.2rem;
	}

	.contact-emails a {
		color: rgba(3, 24, 3, 0.9);
		text-decoration: underline;
		font-size: 1.2rem;
	}

	.newsletter h4 {
		font-size: 2rem;
		text-align: center;
		margin: 2rem 0 1rem 0;
		letter-spacing: 0.2rem;
	}

	/* Responsive tweaks */
	@media (max-width: 1200px) {
		.contact-content {
			width: 86vw;
		}
		.contact-panel {
			padding: 2.5rem;
			gap: 2rem;
		}
		.panel-title {
			font-size: 2.4rem;
		}
	}

	@media (max-width: 900px) {
		.contact-content {
			width: 92vw;
		}
		.contact-panel {
			flex-direction: column;
		}
		.panel-left,
		.panel-right {
			width: 100%;
		}
	}

	@media (max-width: 600px) {
		.contact-content {
			width: 98vw;
			padding: 1rem;
		}
		.contact-panel {
			padding: 1rem;
			gap: 1rem;
		}
		.panel-title {
			font-size: 1.4rem;
		}
		.address-block {
			font-size: 0.95rem;
		}
		.social-button {
			width: fit-content;
		}
	}
</style>
