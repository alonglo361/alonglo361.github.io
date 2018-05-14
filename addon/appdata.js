"use strict";

let holdAlgorithms = document.createElement('span');
holdAlgorithms.setAttribute('id', 'algorithms');

let allAlgorithms = [];
let ex = "gay";
$.getJSON('https://alonglo361.github.io/addon/algorithms.json', function(data) {
	ex = "gaytony";
	for (let i = 0; i < data['results'].length; i++){ 
    	allAlgorithms.push({algorithmName: data['results'][i]['name'], img: data['results'][i]['imageSource'], row: data['results'][i]['row']});
    }
});


function createElements(){ 
	for (let i = 0; x < data['results'].length; i++){

		let algoBox = document.createElement('div'); //This is the box that encases 1 algorithm.
		algoBox.setAttribute('class', allAlgorithms[i]['row']);
		algoBox.setAttribute('id', allAlgorithms[i]['algorithmName']);

		let boxImage = document.createElement('img');
		boxImage.setAttribute('src', allAlgorithms[i]['img']);
		algoBox.appendChild(boxImage);

		let infoElem = document.createElement('div');
		infoElem.setAttribute('class', 'infoDiv');
		algoBox.appendChild(infoElem);

		let infoName = document.createElement('div');
		let strong = document.createElement('strong');
		let strongName = document.createTextNode(allAlgorithms[i]['algorithmName']);
		infoName.appendChild(strong);
		infoName.appendChild(strongName);
		infoElem.appendChild(infoName);

		holdAlgorithms.appendChild(algoBox);

		document.body.appendChild(holdAlgorithms);
	}
}

	function searchFunction() { 
		var selectAllAlgorithms = document.querySelectorAll('#algorithms .algorithm');    
		var search = document.querySelector('#filter-search');
		var cache = [];

		selectAllAlgorithms.forEach(function(one_algorithm) {
			cache.push({
			  element: one_algorithm,
			  text: one_algorithm.id.trim().toLowerCase()
			});
		});

		function filter() {
		var query = this.value.trim().toLowerCase();
			cache.forEach(function(algorithmText) {
			  var index = 0;

			  if (query) {
			    index = algorithmText.text.indexOf(query);
			  }

			  algorithmText.element.style.display = index === -1 ? 'none' : '';
			});
		}

		if ('oninput' in search) {
			search.addEventListener('input', filter);
		} 
		else {
			search.addEventListener('keyup', filter);
		}
	}

	createElements();
	searchFunction();