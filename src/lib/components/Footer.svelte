<footer>
	<p>Refractions® is a registered trademark of Refractions Label Ltd. All rights reserved.</p>
	<a href="https://ffm.bio/refractionslabel">Connect on Socials</a>
	<a id="camden" href="https://camdencollective.co.uk/" aria-label="Camden Collective Website Link"
		><img src="/Logos/camden_collective.webp" alt="Camden Collective Logo" width="60" /></a
	>
	<p id="camden-hover-text">Supported by Camden Collective</p>
	<form>
		<input name="email" type="email" placeholder="EMAIL ADDRESS" />
		<button type="submit">Subscribe</button>
	</form>
</footer>

<style>
	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 97vw;
		position: relative;
		bottom: 0;
		padding: 1rem 2rem;
		background-color: rgba(3, 24, 3);
	}

	p,
	a {
		font-size: 0.8rem;
		margin: 0 1rem;
	}

	a {
		text-decoration: underline;
	}

	#camden-hover-text {
		display: none;
		position: absolute;
		bottom: 8rem;
		right: 1rem;
		font-size: 1rem;
		background-color: rgba(3, 24, 3);
		padding: 0.5rem;
		border: 1px solid white;
	}

	#camden:hover + #camden-hover-text {
		display: block;
	}
</style>
