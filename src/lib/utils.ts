import { afterNavigate } from '$app/navigation';
import { page } from '$app/state';

export const scrollToTop = () => {
	afterNavigate(() => {
		window.scrollTo(0, 0);
	});
};

export const getBGImage = () => {
	return afterNavigate(() => {
		return page.url.pathname.slice(1) + 'Background.jpg';
	});
};
