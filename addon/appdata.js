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
   information.setAttribute('id', 'informationtext');
   let exitButton = document.createElement('button');
   exitButton.setAttribute('id', "clickExit");
   let exit = document.createTextNode('X');
   exitButton.appendChild(exit);
   infobox.appendChild(exitButton);
   infobox.appendChild(information);
   infobox.setAttribute('id', "more-info");
   document.body.appendChild(infobox);
}

$('section.algorithm').click(function(){
   checkOpacity = document.getElementById('more-info');
   checkOpacity.style.display = "block";

});


$(document).on('click', '#clickExit', function () {
   checkOpacity = document.getElementById('more-info');
   checkOpacity.style.display = "none";

});

function start() {
	createElements();
	createInfoBox();

}

$(document).click(function(event) {
	alert(event.target.id);
});

window.onload = start;