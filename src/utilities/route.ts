import Block, { PropsType } from '../elements/block';

function isEqual(lhs: string, rhs: string) {
	return lhs === rhs;
}

function renderBlock(query: string, block: Block) {
	const root = document.querySelector(query);
	if (root && block) {
		return root;
	}
	return false;
}

class Route {
	pathname: string;
	blockClass: typeof Block;
	block: Block | null;
	props: PropsType;

	constructor(pathname: string, view: typeof Block, props: PropsType) {
		this.pathname = pathname;
		this.blockClass = view;
		this.block = null;
		this.props = props;
	}

	getPathname() {
		return this.pathname;
	}

	leave() {
		if (this.block && (Object.keys(this.block).length)) {
			this.block.destroy();
		}
	}

	match(pathname: string) {
		return isEqual(pathname, this.pathname);
	}

	render() {
		this.block = new this.blockClass({}, '', false );
		renderBlock(this.props.rootQuery, this.block);
		return;
	}
}

export default Route;