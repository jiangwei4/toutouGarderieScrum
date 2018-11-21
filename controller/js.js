function connexion() {
	var login = document.getElementById("login").value;
	var mdp = document.getElementById("mdp").value;
	if(login != '' && mdp != '' ){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
				alert(xhr.responseText);
			}
		};
		xhr.open("GET","../controller/connexionBDD.php?mdp="+mdp+"&login="+login,true);
		xhr.send(null);	
	}else {
		alert("login ou mot de passe vide ");
	}
}

function effacer(){
	document.getElementById("login").value = '';
	document.getElementById("mdp").value = '';
}
function inscription(){
	
		if(document.getElementById("inscriptionDiv").style.display == 'none' ){
			
				document.getElementById("inscriptionDiv").style.display = 'block';
		
	} else {
		document.getElementById("formulaireAjoutAnimal").style.display = 'none';
	}
}


function effacer2(){
		document.getElementById("login2").value = '';
		document.getElementById("mdp2").value = '';
		document.getElementById("nom").value = '';
		document.getElementById("prenom").value = '';
		document.getElementById("adresse").value = '';
		document.getElementById("tel").value = '';	
}

function inscription2() {
	var login = document.getElementById("login2").value;
	var mdp = document.getElementById("mdp2").value;
	var nom = document.getElementById("nom").value;
	var prenom = document.getElementById("prenom").value;
	var adresse = document.getElementById("adresse").value;
	var tel = document.getElementById("tel").value;	
	if(login2 != '' && mdp2 != '' ){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
				alert(xhr.responseText);
			}
		};
		xhr.open("GET","../controller/inscriptionBDD.php?mdp="+mdp+"&login="+login+"&nom="+nom+"&prenom="+prenom+"&adresse="+adresse+"&tel="+tel,true);
		xhr.send(null);	
	}else {
		alert("login ou mot de passe vide ");
	}
}

function afficherAjouterAnimal(){
		if(document.getElementById("formulaireAjoutAnimal").style.display == 'none' ){
			
				document.getElementById("formulaireAjoutAnimal").style.display = 'block';
		
	} else {
		document.getElementById("formulaireAjoutAnimal").style.display = 'none';
	}
	
}

function ajoutAnim(){
	var race = document.getElementById("race").value;
	var poids = document.getElementById("poids").value;
	var nom = document.getElementById("nom").value;
	var couleur = document.getElementById("couleur").value;
	var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
				alert(xhr.responseText);
			}
		};
		xhr.open("GET","../controller/ajoutAnimalBDD.php?race="+race+"&poids="+poids+"&nom="+nom+"&couleur="+couleur,true);
		xhr.send(null);	

}

function effacer3(){
	document.getElementById("race").value = '';
	document.getElementById("poids").value = '';
	document.getElementById("nom").value = '';
	document.getElementById("couleur").value = '';
}


function afficherAnimal(){
		if(document.getElementById("afficherAnimal").style.display == 'none' ){
			
				document.getElementById("afficherAnimal").style.display = 'block';
		
	} else {
		document.getElementById("afficherAnimal").style.display = 'none';
	}
}