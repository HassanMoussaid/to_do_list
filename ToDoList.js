function addTache(){

	let tache = document.getElementById('myInput').value
	let lb = document.getElementById("listeBad");

	let ligne = document.createElement('div');
	ligne.setAttribute("id", tache);
	ligne.innerHTML = tache+'<button type="button" class="btn btn-primary" onclick=addTacheGood('+tache+')>Termine</button>';
	lb.appendChild(ligne);

}

function addTacheGood(tache){
	document.getElementById(tache).remove();

	let lg = document.getElementById("listeGood");
	let ligne = document.createElement('div');
	ligne.setAttribute("id", tache);
	ligne.innerHTML = tache+'<button type="button" class="btn btn-primary" onclick=removeTacheGood('+tache+')>Termine</button>';
	lb.appendChild(ligne);
}

function removeTacheGood(tache){
	document.getElementById(tache).remove();
	let lb = document.getElementById("listeBad");

	let ligne = document.createElement('div');
	ligne.setAttribute("id", tache);
	ligne.innerHTML = tache+'<button type="button" class="btn btn-primary" onclick=addTacheGood('+tache+')>Termine</button>';
	lb.appendChild(ligne);
}



