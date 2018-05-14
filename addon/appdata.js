"use strict";

let holdAlgorithms = document.createElement('span');
holdAlgorithms.setAttribute('id', 'algorithm');

let allAlgorithms = [];
// let sortByName;
// let sortByPlace;
let ex = "gay";
$.getJSON('https://alonglo361.github.io/addon/algorithms.json', function(data) {
	ex = "gaytony";
	for (let i = 0; i < data['results'].length; i++){ 
    	allAlgorithms.push({algorithmName: data['results'][i]['name'], img: data['results'][i]['imageSource'], row: data['results'][i]['row']});
    }
});


function createElements(){ 
	for (let x = 0; x < data['results'].length; x++){

		let algoBox = document.createElement('div'); //This is the box that encases 1 algorithm.
		algoBox.setAttribute('class', allAlgorithms[x]['row']);
		algoBox.setAttribute('id', allAlgorithms[x]['algorithmName']);

		let boxImage = document.createElement('img');
		boxImage.setAttribute('src', allAlgorithms[x]['img']);
		algoBox.appendChild(boxImage);

		let infoElem = document.createElement('div');
		infoElem.setAttribute('class', 'infoDiv');
		algoBox.appendChild(infoElem);

		let infoName = document.createElement('div');
		let strong = document.createElement('strong');
		let strongName = document.createTextNode(allAlgorithms[x]['name']);
		infoName.appendChild(strong);
		infoName.appendChild(strongName);
		infoElem.appendChild(infoName);

		holdAlgorithms.appendChild(algoBox);

		document.body.appendChild(holdAlgorithms);
	}
}