"use strict";

let holdAlgorithms = document.createElement('span');
holdAlgorithms.setAttribute('id', 'algorithms');
let checkOpacity; 

let allAlgorithms = [];
let ex = "gay";
$.getJSON('https://alonglo361.github.io/addon/algorithms.json', function(data) {
   ex = data;
   for (let i = 0; i < data['results'].length; i++){ 
      allAlgorithms.push({name: data['results'][i]['name'], algoid: data['results'][i]['id'], img: data['results'][i]['imageSource'], row: data['results'][i]['row']});
    }
});


function createElements(){
   for (let i = 0; i < allAlgorithms.length; i++){
      let algoBox = document.createElement('section');
      algoBox.setAttribute('class', allAlgorithms[i]['row']);
      algoBox.setAttribute('id', allAlgorithms[i]["algoid"]); //algoid is Algorithm id.

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
}

function createInfoBox(){
   let infobox = document.createElement('article');
   let information = document.createElement('p');
   infobox.appendChild(information);
   infobox.setAttribute('id', "more-info");
   infobox.setAttribute("onclick", "showHide();");
}



$('section.algorithm').click(function(){
	checkOpacity = document.getElementById('more-info');
	checkOpacity.style.display = "block";

});

$('section').click(function(e) { //Prepare for ugly code.
	$("p").empty();
	if (e.target.parentNode.id === 'insertion-sort' || e.target.id === 'insertion-sort') {
		let create = document.createTextNode('This is insertion sort.');
		var test = document.querySelector('p');
		test.appendChild(create);

	}
	else if (e.target.parentNode.id === 'selection-sort' || e.target.id === 'selection-sort') {
		let create = document.createTextNode('This is selection sort.');
		var test = document.querySelector('p');
		test.appendChild(create);
		}

	else if (e.target.parentNode.id === 'bubble-sort' || e.target.id === 'bubble-sort') {
		let create = document.createTextNode('heyyy lol');
		var test = document.querySelector('p');
		test.appendChild(create);
		}
	else if (e.target.parentNode.id === 'shell-sort' || e.target.id === 'shell-sort') {
		let create = document.createTextNode('heyyy lol');
		var test = document.querySelector('p');
		test.appendChild(create);
		}

	else if (e.target.parentNode.id === 'merge-sort' || e.target.id === 'merge-sort') {
		let create = document.createTextNode('heyyy lol');
		var test = document.querySelector('p');
		test.appendChild(create);
	}

	else if (e.target.parentNode.id === 'heap-sort' || e.target.id === 'heap-sort') {
		let create = document.createTextNode('heyyy lol');
		var test = document.querySelector('p');
		test.appendChild(create);
}

	else if (e.target.parentNode.id === 'quick-sort' || e.target.id === 'quick-sort') {
		let create = document.createTextNode('heyyy lol');
		var test = document.querySelector('p');
		test.appendChild(create);
	}

	else if (e.target.parentNode.id === 'quick3way-sort' || e.target.id === 'quick3way-sort') {
		let create = document.createTextNode('heyyy lol');
		var test = document.querySelector('p');
		test.appendChild(create);
	}
});


$(document).on('click', '#clickExit', function () {
	checkOpacity = document.getElementById('more-info');
	checkOpacity.style.display = "none";

});

window.onload = createInfoBox;