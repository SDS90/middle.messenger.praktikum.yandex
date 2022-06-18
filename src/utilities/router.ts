//Роутинг

import Route from './route';

class Router {
	routes: Route[];
	history: History;
	currentRoute: Route | null;
	rootQuery: string;
	pathnames: string[];
	onRouteCallback: () => void;
	unprotectedPaths: `/${string}`[];
	instance: Router;

	constructor(rootQuery: string) {
		this.routes = [];
		this.pathnames = [];
		this.unprotectedPaths = [];
		this.history = window.history;
		this.currentRoute = null;
		this.rootQuery = rootQuery;
		this.onRouteCallback = () => {return;};
	}

	getCurrentRoute() {
		return this.currentRoute;
	}

	use(pathname: string, block: any) {
		const route = new Route(pathname, block, { rootQuery: this.rootQuery });
		this.routes.push(route);
		this.pathnames.push(pathname);
		return this;
	}

	hasRoute(pathname: string) {
		if (!this.pathnames.includes(pathname)) {
			return '*';
		}
		return pathname;
	}

	start() {
		window.onpopstate = () => {
			const pathname = this.hasRoute(window.location.pathname);
			this.onRoute(pathname);
		};
		const pathname = this.hasRoute(window.location.pathname);
		this.onRoute(pathname);
	}

	onRoute(pathname: string) {
		const route = this.getRoute(pathname);
		if (!route) {
			return;
		}
		if (this.currentRoute) {
			this.currentRoute.leave();
		}
		this.currentRoute = route;
		route.render();
		if (!this.unprotectedPaths.includes(pathname as `/${string}`)) {
			this.onRouteCallback();
		}
	}

	setUnprotectedPaths(paths: `/${string}`[]) {
		this.unprotectedPaths = paths;
		return this;
	}

	go(pathname: string) {
		this.history.pushState({}, '', pathname);
		this.onRoute(pathname);
	}

	back() {
		this.history.back();
	}

	forward() {
		this.history.forward();
	}

	getRoute(pathname: string) {
		return this.routes.find((route) => route.match(pathname));
	}

	getLocationPathname() {
		return window.location.pathname;
	}
}

export default Router;