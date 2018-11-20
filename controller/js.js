function connexion() {
	var login = document.getElementById("login").value;
	var mdp = document.getElementById("mdp").value;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            alert(xhr.responseText);
        }
    };
    xhr.open("GET","../modele/inscriptionBDD.php?mdp="+mdp+"&login="+login,true);
    xhr.send(null);
}