import { checkbox, searchBar, searchInput } from './elements.js';
import { themeToggle, getInputValue } from './actions.js';

export function registerThemeControl() {
	checkbox.addEventListener('click', themeToggle);
	searchBar.addEventListener('click', () => {
		searchInput.focus();
	});
	searchInput.addEventListener('keypress', getInputValue);
}
