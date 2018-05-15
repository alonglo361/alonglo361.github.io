"use strict";

let holdAlgorithms = document.createElement('span');
holdAlgorithms.setAttribute('id', 'algorithms');
let checkOpacity; 

let allAlgorithms = [];
let allText = [];
$.getJSON('https://alonglo361.github.io/addon/algorithms.json', function(data) {
   for (let i = 0; i < data['results'].length; i++){ 
      allAlgorithms.push({name: data['results'][i]['name'], algoid: data['results'][i]['id'], img: data['results'][i]['imageSource'], row: data['results'][i]['row']});
      allText.push({text: data['textdata'][i]['text'], worst: data['textdata'][i]['worst'], best: data['textdata'][i]['best'], average: data['textdata'][i]['average'], space: data['textdata'][i]['space'], info: data['textdata'][i]['info']})
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
      infoElem.setAttribute('class', 'info');
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
   information.setAttribute('id', 'informationtext'); // Whats the point
   let exitButton = document.createElement('button');
   exitButton.setAttribute('id', "clickExit");
   let exit = document.createTextNode('X');
   exitButton.appendChild(exit);
   infobox.appendChild(exitButton);
   infobox.appendChild(information);
   infobox.setAttribute('id', "more-info");
   document.body.appendChild(infobox);
}

function createText(x){ // This is so ugly and im so sorry but I'm so frustrated.
	let divination = document.getElementById('more-info');
	let textbox = document.createElement('div');
	textbox.setAttribute('id', 'temp');
	let firstp = document.createElement('p');
	let actualtext = document.createTextNode(allText[x]['text']);
	let secondp = document.createElement('p');
	let actualworst = document.createTextNode(allText[x]['worst']);
	let thirdp = document.createElement('p');
	let actualbest = document.createTextNode(allText[x]['best']);
	let fourthp = document.createElement('p');
	let actualavg = document.createTextNode(allText[x]['average']);
	let fifthp = document.createElement('p');
	let actualspace = document.createTextNode(allText[x]['space']);
	let sixthp = document.createElement('p');
	let actualinfo = document.createTextNode("Learn More: " + allText[x]['info']);

	firstp.appendChild(actualtext);
	secondp.appendChild(actualworst);
	thirdp.appendChild(actualbest);
	fourthp.appendChild(actualavg);
	fifthp.appendChild(actualspace);
	sixthp.appendChild(actualinfo);
	textbox.appendChild(firstp);
	textbox.appendChild(secondp);
	textbox.appendChild(thirdp);
	textbox.appendChild(fourthp);
	textbox.appendChild(fifthp);
	textbox.appendChild(sixthp);
	$('div.temp').replaceWith(textbox);
}

function updateText(){
	let divination = document.getElementById('more-info');
	let textbox = document.createElement('div');
	textbox.setAttribute('class', 'temp');
	let firstp = document.createElement('p');
	let actualtext = document.createTextNode(allText[x]['text']);
	let secondp = document.createElement('p');
	let actualworst = document.createTextNode(allText[x]['worst']);
	let thirdp = document.createElement('p');
	let actualbest = document.createTextNode(allText[x]['best']);
	let fourthp = document.createElement('p');
	let actualavg = document.createTextNode(allText[x]['average']);
	let fifthp = document.createElement('p');
	let actualspace = document.createTextNode(allText[x]['space']);
	let sixthp = document.createElement('p');
	let actualinfo = document.createTextNode("Learn More: " + allText[x]['info']);

	firstp.appendChild(actualtext);
	secondp.appendChild(actualworst);
	thirdp.appendChild(actualbest);
	fourthp.appendChild(actualavg);
	fifthp.appendChild(actualspace);
	sixthp.appendChild(actualinfo);
	textbox.appendChild(firstp);
	textbox.appendChild(secondp);
	textbox.appendChild(thirdp);
	textbox.appendChild(fourthp);
	textbox.appendChild(fifthp);
	textbox.appendChild(sixthp);
	divination.appendChild(textbox);
}

$(document).on('click', '.algorithm', function (e){
   checkOpacity = document.getElementById('more-info');
   checkOpacity.style.display = "block";
   if (e.target.parentNode.id === 'insertion-sort' || e.target.id === 'insertion-sort') {
      createText(0);

   }
   else if (e.target.parentNode.id === 'selection-sort' || e.target.id === 'selection-sort') {
      createText(1);
    }

   else if (e.target.parentNode.id === 'bubble-sort' || e.target.id === 'bubble-sort') {
      createText(2);
    }
   else if (e.target.parentNode.id === 'shell-sort' || e.target.id === 'shell-sort') {
      createText(3);
    }

   else if (e.target.parentNode.id === 'merge-sort' || e.target.id === 'merge-sort') {
      createText(4);
   }

   else if (e.target.parentNode.id === 'heap-sort' || e.target.id === 'heap-sort') {
      createText(5);
	}

   else if (e.target.parentNode.id === 'quick-sort' || e.target.id === 'quick-sort') {
      createText(6);
   	}

   else if (e.target.parentNode.id === 'quick3way-sort' || e.target.id === 'quick3way-sort') {
      createText(7);
   	}
});


$(document).on('click', '#clickExit', function () {
   checkOpacity = document.getElementById('more-info');
   checkOpacity.style.display = "none";

});

function start() {
	updateText();
	createElements();
	createInfoBox();

}

window.onload = start;




