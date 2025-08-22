<script lang="ts">
	import HighlightedHeader from '$lib/components/HighlightedHeader.svelte';

	let { data, form } = $props();
</script>

{#if data.unlocked}
	<section id="logo-section">
		<img alt="Main Brand Logo and Title" src="/Logos/RefractionsLogoWhite.svg" width="600" />
		<p>Presenting a higher calibre of audio, clothing, and events within bass music</p>
	</section>
	<section id="inside-info">
		<section id="why" class="info-section">
			<HighlightedHeader headerText="WHY"></HighlightedHeader>
			<p>TO PUSH THE FOREFRONT OF INNOVATIVE AND UNCONVENTIONAL BASS MUSIC</p>
			<p>TO CHAMPION INDEPENDENCE AND THE INDEPENDENTS</p>
			<p>TO LOOK FORWARD AND OPERATE AS A TRULY 21ST CENTURY RECORD LABEL</p>
			<p>TO CONSISTENTLY DELIVER THE HIGHEST LEVEL OF QUALITY AND EXPERIENCE IN EVERYTHING WE DO</p>
		</section>
		<section id="how" class="info-section">
			<HighlightedHeader headerText="HOW"></HighlightedHeader>
			<p>EVERY RELEASE IS A CAMPAIGN</p>
			<p>FAIR AND ROBUST EXCLUSIVE LICENCE AGREEMENT, VETTED BY A MUSIC LAWYER</p>
			<p>BESPOKE ARTWORK AND VISUAL ASSETS</p>
			<p>SOCIAL MARKETING STRATEGY AND EXECUTION</p>
			<p>CUSTOM TWO-WEEK POST-RELEASE PERFORMANCE REPORT</p>
			<p>GLOBAL DISTRIBUTION AND PLAYLIST PITCHING VIA SYMPHONIC DISTRIBUTION</p>
			<p>TRANSPARENT, ON DEMAND ROYALTY DATA VIA INFINITE CATALOG</p>
			<p>DJ AND RADIO PROMO VIA PROMOLY</p>
			<p>TASTEMAKER CHANNEL PLACEMENTS VIA EDM DISTRICT</p>
		</section>
		<section id="who" class="info-section">
			<HighlightedHeader headerText="WHO"></HighlightedHeader>
			<p>
				REFRACTIONS IS THE CREATION OF MYSELF, JOE PARKER, A LONDON-BASED LABEL FOUNDER WITH OVER A
				DECADE OF EXPERIENCE IN INDEPENDENT ELECTRONIC MUSIC.
			</p>
			<p>
				PRIOR TO STARTING REFRACTIONS, I WORKED AT ANJUNADEEP ASSISTING WITH LABEL OPERATIONS,
				CAMPAIGN ROLLOUTS, EVENT COORDINATION, AND BOTH ONLINE AND OFFLINE MARKETING.
			</p>
			<p>
				I PREVIOUSLY FOUNDED AND RAN A DIGITAL LABEL, RELEASING OVER 40 PROJECTS AND REACHING MORE
				THAN 1.5 MILLION STREAMS. I HOLD A DEGREE IN MUSIC BUSINESS AND A MASTER’S IN ENTERPRISE AND
				ENTREPRENEURSHIP, BOTH OF WHICH UNDERPIN THE STRUCTURE AND VISION BEHIND REFRACTIONS.
			</p>
			<p>
				REFRACTIONS IS THE CULMINATION OF EVERYTHING I’VE LEARNED SO FAR. IT’S A LABEL BUILT ON
				QUALITY, IN BOTH PRODUCT AND EXPERIENCE; PROFESSIONALISM, IN HOW WE OPERATE AND INTERACT
				WITH THE WIDER INDUSTRY; AUTHENTICITY, IN THE PRODUCTS WE SELL AND THE CULTURE WE PUSH; AND
				INDEPENDENCE, TO MAINTAIN INTEGRITY IN ALL WE DO.
			</p>
		</section>
	</section>
	<section id="contact-info">
		<a id="email-link" href="mailto:joe@refractionslabel.com">joe@refractionslabel.com</a>
		<a href="/" aria-label="Main Website Link"
			><img src="/Logos/RefractionsLogomarkWhite.svg" alt="Refractions Logomark" width="50" /></a
		>
		<p id="rights">
			Refractions® is a registered trademark of Refractions Label Ltd. All rights reserved.
		</p>
	</section>
{:else}
	{#if form?.message}
		<p>{form.message}</p>
	{/if}
	<form method="POST" action="?/unlock">
		<input type="password" name="password" placeholder="Password" required />
		<button type="submit">Unlock</button>
	</form>
{/if}

<style>
	#logo-section {
		margin: 25em 0 10em 0;
		text-align: center;
	}

	#inside-info {
		display: flex;
		flex-direction: column;
		margin: 15rem;
	}

	#contact-info {
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	.info-section {
		margin-bottom: 15rem;
	}

	p {
		margin: 3rem 0;
	}

	#email-link {
		text-transform: lowercase;
		text-decoration: underline;
		margin-bottom: 3rem;
	}

	#rights {
		margin-top: 5rem;
		font-size: 0.8rem;
	}
</style>
