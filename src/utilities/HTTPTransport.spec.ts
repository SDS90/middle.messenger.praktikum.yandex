import http from './HTTPTransport';

describe('Тестируем HTTPTransport', () => {
	it('Get запрос', (done) => {
		http.get('https://jsonplaceholder.typicode.com/comments',{ 
			data: { 
				postId: 1
			}
		})
		.then(({ response }) => {
			const [{ postId }] = JSON.parse(response) || [];
			if (postId === 1) {
				done();
			} else {
				done(new Error('Ошибка'));
			}
		})
		.catch(function(){ done() });
	});

	it('Post запрос', (done) => {
		http.post('https://jsonplaceholder.typicode.com/posts', {
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			data: JSON.stringify({
				title: 'foo',
				body: 'bar',
				userId: 1,
			}),
		})
		.then(({ response }) => {
			const { title } = JSON.parse(response) || {};
			if (title === 'foo') {
				done();
			} else {
				done(new Error('Ошибка'));
			}
		})
		.catch(function(){ done() });
	});
});