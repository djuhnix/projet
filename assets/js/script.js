
var form = document.querySelector("form");
var block_to_insert ;
var container_block = document.getElementById('envoi') ;
var nom = document.querySelector("input[name=nom]").value;
var prenom = document.querySelector("input[name=prenom]").value;
var globalMark= document.querySelector("input[name=globalMark]").value;
var designMark = document.querySelector("input[name=designMark]").value;
var informationsMark = document.querySelector("input[name=informationsMark]").value;
var comment = document.querySelector("input[name=comment]").value;
var element=document.getElementById('envoi');

document.body.onload = addElement;

function addElement (tag, id-container,content) {
  // crée un nouvel élément tag
  var newEl = document.createElement(tag);
  // et lui donne un peu de contenu
  var newContent = document.createTextNode(content);
  // ajoute le noeud texte au nouveau div créé
  newEl.appendChild(newContent);

  // ajoute le nouvel élément créé et son contenu dans le DOM
  var container = document.getElementById(id-container);
  document.container.appendChild(newEl, conainer);
}
