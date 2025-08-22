<script lang="ts">
	let { headerText } = $props();
</script>

<div class="highlighted">
	<h1>{headerText}</h1>
</div>

<style>
	.highlighted {
		margin: 5rem 0;
	}
</style>
