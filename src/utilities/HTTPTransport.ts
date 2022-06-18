//HTTPTransport
const METHODS = {
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',
	DELETE: 'DELETE',
};

function queryStringify(data: any) {
	let result: string = "";
	if (typeof data == 'object') {
		result = "";
		for (const key in data){
			if (result == ""){
				result = result + "?";
			} else {
				result = result + "&";
			}
			result = result + key + "=" + data[key];
		}
	}
	return result;
}
 
class HTTPTransport {
	get = (url: string, options: any) => {
		return this.request(url, {...options, method: METHODS.GET}, options.timeout);
	};

	post = (url: string, options: any) => {
		return this.request(url, {...options, method: METHODS.POST}, options.timeout);
	};

	put = (url: string, options: any) => {
		return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
	};

	delete = (url: string, options: any) => { 
		return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
	};

	request = (url: string, options: any, timeout = 5000) => {
		return new Promise(function(resolve, reject) {
			const xhr = new window.XMLHttpRequest();

			if (!options){
				options = {};
			}

			if ((options.method == METHODS.GET) && options.data && (typeof options.data == 'object')){
				xhr.open(options.method, queryStringify(options.data));
			} else {
				xhr.open(options.method, url);
			}

			for (const key in options.headers){
				xhr.setRequestHeader(key, options.headers[key]);
			}

			xhr.withCredentials = true;

			xhr.onload = function() {
				resolve(xhr);
			};

			xhr.onabort = reject;
			xhr.onerror = reject;

			xhr.timeout = timeout;
			xhr.ontimeout = reject;

			if (options.method === METHODS.GET || !options.data) {
				xhr.send();
			} else {
				xhr.send(options.data);
			}
		});
	};
}

export default new HTTPTransport();