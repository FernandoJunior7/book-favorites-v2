const toggleTheme = document.getElementById('toggle-theme');
const checkbox = toggleTheme.querySelector('input');
const root = document.documentElement;

export function registerThemeControl() {
	checkbox.addEventListener('click', themeToggle);
}

function themeToggle() {
	root.classList.toggle('light');
	root.classList.toggle('dark');
}
