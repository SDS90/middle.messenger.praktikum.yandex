import HTTPTransport from '../utilities/HTTPTransport';

const defaultHeaders = {
	'Content-type': 'application/json',
};

class APIBase {
	http: typeof HTTPTransport;
	baseHref: string;
	path: string;
	headers: Record<string, string>;

	constructor(baseHref: string, path: string) {
		this.http = HTTPTransport;
		this.baseHref = baseHref || "https://ya-praktikum.tech/api/v2";
		this.path = path || '';
		this.headers = defaultHeaders;
	}

	getPath() {
		return this.baseHref + this.path;
	}

	handleOptions(newOptions: Record<any, any>) {
		const options = newOptions || {};
		if (newOptions.headers){
			options.headers = newOptions.headers
		} else {
			options.headers = this.headers
		}
		return options;
	}

	handleResponse(res: XMLHttpRequest) {
		if (res.response == 'OK') {
			return {ok: true};
		}
		let response = JSON.parse(res.response);
		return response;
	}

	getHeaders() {
		return this.headers;
	}

	get(endpoint: `/${string}`, options: Record<any, any>) {
		if (!options){
			options = {};
		}
		return this.http.get(this.getPath() + endpoint, this.handleOptions(options))
		.then(this.handleResponse);
	}

	post(endpoint: `/${string}`, options: Record<any, any>) {
		if (!options){
			options = {};
		}
		return this.http.post(this.getPath() + endpoint, this.handleOptions(options))
		.then(this.handleResponse);
	}

	put(endpoint: `/${string}`, options: Record<any, any>) {
		if (!options){
			options = {};
		}
		return this.http.put(this.getPath() + endpoint, this.handleOptions(options))
		.then(this.handleResponse);
	}

	delete(endpoint: `/${string}`, options: Record<any, any>) {
		if (!options){
			options = {};
		}
		return this.http.delete(this.getPath() + endpoint, this.handleOptions(options))
		.then(this.handleResponse);
	}
}

export default APIBase;