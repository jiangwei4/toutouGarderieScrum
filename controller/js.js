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
