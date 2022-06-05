export function showBodyMask(){
	document.getElementById("app").classList.add('loading');
}

export function hideBodyMask(){
	document.getElementById("app").classList.remove('loading');
}