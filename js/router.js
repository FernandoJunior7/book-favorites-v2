export class Router {
	routes = {};

	add(pathname, page) {
		this.routes[pathname] = page;
	}

	route(event) {
		event = event || window.event;
		event.preventDefault();

		window.history.pushState({}, '', event.target.href);

		this.handle();
	}

	handle() {
		const { pathname } = window.location;
		const route = this.routes[pathname] || this.routes[404];

		fetch(route)
			.then((data) => data.text())
			.then((data) => {
				const app = document.getElementById('app');

				console.log(app);
				console.log(data);
				app.innerHTML = data;
			});
	}
}