window.onload = () => {
	var elements = Array.from(document.getElementsByClassName('cross-path'));
	elements.forEach( (element) => { 
		element.onmouseover = () => {
			elements.forEach((item) => {
				item.className += ' hover';
			})
		};
		element.onmouseout = () => {
			elements.forEach((item) => {
				item.className = 'cross-path';
			})
		};
	})
	
	var imageBody = false;

	var cross = document.getElementById('cross');
	var body = document.getElementsByTagName('body')[0];

	var logo = document.getElementById('logo');
	logo.addEventListener('click', () => {
		if(!imageBody){
			cross.className += ' image';
			logo.className += ' image';
			body.className += ' image';
			imageBody = true;
		}
		else{
			cross.className = '';
			logo.className = '';
			body.className = '';
			imageBody = false;
		}
	});
}