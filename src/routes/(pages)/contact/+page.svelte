<script lang="ts">
	import HighlightedHeader from '$lib/components/HighlightedHeader.svelte';
</script>

<div class="main-content contact-content">
	<HighlightedHeader headerText="CONTACT"></HighlightedHeader>
</div>

<style>
	.contact-content {
		width: 72vw;
		padding: 2.5rem 2rem 2.5rem 2rem;
	}

	@media (max-width: 600px) {
		.contact-content {
			padding: 0 0.2rem;
		}
	}
</style>
