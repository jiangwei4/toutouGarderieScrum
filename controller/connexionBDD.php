<?php
session_start();
$mdp = $_GET['mdp'];
$login = $_GET['login'];
$utilisateurExiste = 0;

	$host ='localhost';
	$user='root';
	$bdd='toutougarderie';
	
	$mysqli = new mysqli($host, $user, "", $bdd);
if ($mysqli->connect_errno) {
    echo "Echec lors de la connexion à MySQL : (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
} else {
	
	$res = $mysqli->query("SELECT * FROM utilisateur where login='$login' and mdp='$mdp'");

	while ($row = mysqli_fetch_row($res)){
		$utilisateurExiste = $row[0]; //recuperation de l'id
	}

}
if($utilisateurExiste != 0){
	$_SESSION['id'] = $utilisateurExiste;
 echo 'vous êtes logée';
} else {
	echo 'utilisateur introuvable';
}