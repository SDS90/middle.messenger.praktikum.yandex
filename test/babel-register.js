const { JSDOM } = require('jsdom');
const register = require('@babel/register').default;

register({ extensions: ['.ts', '.js'] });

const dom = new JSDOM('', { url: 'http://localhost:3000' });
global.window = dom.window;
global.document = dom.window.document;