import { afterNavigate } from '$app/navigation';

export const scrollToTop = () => {
	afterNavigate(() => {
		window.scrollTo(0, 0);
	});
};
