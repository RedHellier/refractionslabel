<script lang="ts">
	import { scrollToTop } from '$lib/utils';
	scrollToTop();
	import HighlightedHeader from '$lib/components/HighlightedHeader.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />
<section class="container">
	<HighlightedHeader headerText="HIGHLIGHTED" />
	<h1>HEADER ONE</h1>
	<h2>HEADER TWO</h2>
	<p>PARAGRAPH</p>
	<p>PARAGRAPH</p>
	<p>PARAGRAPH</p>
	<p>PARAGRAPH</p>
	<p>PARAGRAPH</p>
	<p>PARAGRAPH</p>
	<p>PARAGRAPH</p>
	<p>PARAGRAPH</p>
	<p>PARAGRAPH</p>
	<p>PARAGRAPH</p>
	<p>PARAGRAPH</p>
	<p>PARAGRAPH</p>
	<p>PARAGRAPH</p>
	<p>PARAGRAPH</p>
	<p>PARAGRAPH</p>
	<p>PARAGRAPH</p>
	<p>PARAGRAPH</p>
	<p>PARAGRAPH</p>
</section>

<style>
	:global(body) {
		background-image: url(/WebBackgrounds/ContactBackground.jpg);
	}
</style>
