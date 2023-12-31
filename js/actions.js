import { root,searchInput } from './elements.js';
import { BookSearch } from './BookSearch.js';

export function themeToggle() {
	root.classList.toggle('light');
	root.classList.toggle('dark');
}

export function getInputValue() {
  if (event.key !== 'Enter') return;

    const value = searchInput.value;
    const search = value.replace(' ', '+');
    BookSearch.search(search);

    searchInput.value = null
}
