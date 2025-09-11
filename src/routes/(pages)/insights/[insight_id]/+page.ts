import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const md = await import(`$lib/_content/insights/${params.insight_id}.md`);
	const text = md.markdown;
	const attributes = md.attributes;
	return { attributes, text };
};
