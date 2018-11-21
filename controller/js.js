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
	if(document.getElementById("inscriptionDiv").innerText === '' ){
	document.getElementById("inscriptionDiv").innerHTML = `<h1><center><b>inscription</b></center></h1>
			<form class="w3-container" name="formulaire1">
				<label class="w3-label w3-text-blue">
					<b>Login</b>
				</label>
				<input name="login" type="text" id="login2" required>
				<label>
					<b>Mot de passe</b>
				</label>
				<input name="mdp" type="text" id="mdp2" required>
				<label>
					<b>nom</b>
				</label>
				<input name="nom" type="text" id="nom" required>
				<label>
					<b>prenom</b>
				</label>
				<input name="prenom" type="text" id="prenom" required>
				<label>
					<b>tel</b>
				</label>
				<input name="tel" type="text" id="tel" required>
				<label>
					<b>adresse</b>
				</label>
				<input name="adresse" type="text" id="adresse" required>

				
				<br/>
				<br/><br/>
				<button onclick="effacer2()">effacer</button>
				<button onclick="inscription2()">s'enregistrer</button>
			</form>`;
			
	} else {
		document.getElementById("inscriptionDiv").innerText =''
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