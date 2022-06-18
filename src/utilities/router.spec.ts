import { expect } from 'chai';
import Router from './router';

function MainPage(){return;}
function ContactPage(){return;}
function NewsPage(){return;}

describe('Тестируем роутер', () => {
	const router = new Router('#app');

	router
		.use('/', MainPage)
		.use('/contact', ContactPage)
		.use('/news', NewsPage)
		.start();

	it('Тестируем изменение адреса', () => {
		router.go('/');
		router.go('/contact');
		expect(router.history.length).to.eq(3);
	});

	it('Тестируем получение', () => {
		router.go('/news');
		const { pathname } = router.currentRoute || {};
		expect(pathname).to.eq('/news');
	});
});