"use strict";

let holdAlgorithms = document.createElement('span');
holdAlgorithms.setAttribute('id', 'algorithms');
let checkOpacity; 

let allAlgorithms = [];
let allText = [];
$.getJSON('https://alonglo361.github.io/addon/algorithms.json', function(data) {
   for (let i = 0; i < data['results'].length; i++){ 
      allAlgorithms.push({name: data['results'][i]['name'], algoid: data['results'][i]['id'], img: data['results'][i]['imageSource'], row: data['results'][i]['row']});
      allText.push({text: data['textdata'][i]['text'], worst: data['textdata'][i]['worst'], best: data['textdata'][i]['best'], average: data['textdata'][i]['average'], space: data['textdata'][i]['space'], info: data['textdata'][i]['space']})
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
   let infodiv = document.createElement('div');
   let information = document.createElement('p');
   information.setAttribute('id', 'informationtext');
   let exitButton = document.createElement('button');
   exitButton.setAttribute('id', "clickExit");
   let exit = document.createTextNode('X');
   exitButton.appendChild(exit);
   infobox.appendChild(exitButton);
   infodiv.appendChild(information);
   infobox.appendCHild(infodiv);
   infobox.setAttribute('id', "more-info");
   document.body.appendChild(infobox);
}

$(document).on('click', '.algorithm', function (e){
   checkOpacity = document.getElementById('more-info');
   checkOpacity.style.display = "block";

   var writeP = document.querySelector('p');
   $("p").empty();
   if (e.target.parentNode.id === 'insertion-sort' || e.target.id === 'insertion-sort') {
      let create = document.createTextNode(allText[0]['text']);
      writeP.appendChild(create);

   }
   else if (e.target.parentNode.id === 'selection-sort' || e.target.id === 'selection-sort') {
      let create = document.createTextNode(allText[1]['text']);
      writeP.appendChild(create);
    }

   else if (e.target.parentNode.id === 'bubble-sort' || e.target.id === 'bubble-sort') {
      let create = document.createTextNode(allText[2]['text']);
      writeP.appendChild(create);
    }
   else if (e.target.parentNode.id === 'shell-sort' || e.target.id === 'shell-sort') {
      let create = document.createTextNode(allText[3]['text']);
      writeP.appendChild(create);
    }

   else if (e.target.parentNode.id === 'merge-sort' || e.target.id === 'merge-sort') {
      let create = document.createTextNode(allText[4]['text']);
      writeP.appendChild(create);
   }

   else if (e.target.parentNode.id === 'heap-sort' || e.target.id === 'heap-sort') {
      let create = document.createTextNode(allText[5]['text']);
      writeP.appendChild(create);
	}

   else if (e.target.parentNode.id === 'quick-sort' || e.target.id === 'quick-sort') {
      let create = document.createTextNode(allText[6]['text']);
      writeP.appendChild(create);
   	}

   else if (e.target.parentNode.id === 'quick3way-sort' || e.target.id === 'quick3way-sort') {
      let create = document.createTextNode(allText[7]['text']);
      writeP.appendChild(create);
   	}
});


$(document).on('click', '#clickExit', function () {
   checkOpacity = document.getElementById('more-info');
   checkOpacity.style.display = "none";

});

function start() {
	createElements();
	createInfoBox();

}

window.onload = start;