export class BookSearch {
	static search(value) {
		fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
			.then((data) => data.json())
			.then((data) => console.log(data));
	}
}
