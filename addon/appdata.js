"use strict";

let holdAlgorithms = document.createElement('span');
holdAlgorithms.setAttribute('id', 'algorithms');

let allAlgorithms = [];
let ex = "gay";
$.getJSON('https://alonglo361.github.io/addon/algorithms.json', function(data) {
	ex = data;
	for (let i = 0; i < data['results'].length; i++){ 
    	allAlgorithms.push({name: data['results'][i]['name'], img: data['results'][i]['imageSource'], row: data['results'][i]['row']});
    }
});



for (let i = 0; i < allAlgorithms.length; i++){
	let algoBox = document.createElement('section');
	algoBox.setAttribute('class', allAlgorithms[i]['row']);
	algoBox.setAttribute('id', allAlgorithms[i]["name"]);

	let boxImage = document.createElement('img');
	boxImage.setAttribute('src', allAlgorithms[i]['img']);
	algoBox.appendChild(boxImage);

	let infoElem = document.createElement('div');
	infoElem.setAttribute('class', 'infoDiv');
	algoBox.appendChild(infoElem);

	let infoName = document.createElement('div');
	let strong = document.createElement('strong');
	let strongName = document.createTextNode(allAlgorithms[i]["name"]);
	strong.appendChild(strongName);
	infoName.appendChild(strong);
	infoElem.appendChild(infoName);

	holdAlgorithms.appendChild(algoBox);

	document.body.appendChild(holdAlgorithms);

}
