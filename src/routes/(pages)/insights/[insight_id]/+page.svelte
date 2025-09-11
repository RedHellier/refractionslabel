<script lang="ts">
	const { data } = $props();
	const { title, date, description } = data.attributes;
	const text = data.text;
	console.log(text);
</script>

<div class="main-content">
	<h1>{title}</h1>
	<p>{date}</p>
	<p>{description}</p>
	<p>{@html text}</p>
</div>
