export function showBodyMask(){
	const app = document.getElementById("app");
	if (app){
		app.classList.add('loading');
	}	
}

export function hideBodyMask(){
	const app = document.getElementById("app");
	if (app){
		app.classList.remove('loading');
	}
}