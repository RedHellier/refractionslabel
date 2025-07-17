<script>
</script>

<svelte:head>
	<title>Redirecting...</title>
	<script>
		const redirectUrl = 'https://www.refractionslabel.com';
		let redirectAlreadyTriggered = false;

		function safeRedirect() {
			if (!redirectAlreadyTriggered) {
				redirectAlreadyTriggered = true;
				window.location.href = redirectUrl;
			}
		}

		setTimeout(safeRedirect, 2000);

		function loadScript(callback) {
			const head = document.getElementsByTagName('head')[0],
				script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'https://tracker.metricool.com/resources/be.js';
			script.onreadystatechange = callback;
			script.onload = callback;
			head.appendChild(script);
		}

		loadScript(function () {
			beTracker.t({ hash: '2f43bd656f5a08b2df5f958ee28b66b' });
			setTimeout(safeRedirect, 1000);
		});
	</script>
</svelte:head>

<div class="logo">
	<svg
		id="Layer_2"
		data-name="Layer 2"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 524.8 524.8"
	>
		<g id="Layer_1-2" data-name="Layer 1">
			<path
				d="M109.6,109.6l394.6,301.1v93.5h-93.5L109.6,109.6M0,0l400.5,524.8h124.3v-124.3L0,0h0Z"
			/>
			<polygon points="505.3 20.6 83.7 20.6 505.3 327.5 505.3 20.6" />
			<polygon points="21.6 506.2 328.4 506.2 21.6 84.8 21.6 506.2" />
		</g>
	</svg>
</div>
<div class="spinner"></div>
<p class="text">Redirecting…</p>

<style>
	:global(body) {
		background-image: none;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: black;
		height: 100vh;
	}
	.logo {
		width: 100px;
		height: auto;
		margin-bottom: 30px;
	}

	.spinner {
		border: 4px solid #f3f3f3;
		border-top: 4px solid #333;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		animation: spin 1s linear infinite;
		margin-bottom: 20px;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
