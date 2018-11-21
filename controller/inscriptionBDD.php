<?php
	session_start();
$mdp = $_GET['mdp'];
$login = $_GET['login'];
$nom = $_GET['nom'];
$prenom = $_GET['prenom'];
$adresse = $_GET['adresse'];
$tel = $_GET['tel'];


$host ='localhost';
	$user='root';
	$bdd='toutougarderie';
	
	$mysqli = new mysqli($host, $user, "", $bdd);
if ($mysqli->connect_errno) {
    echo "Echec lors de la connexion à MySQL : (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
} else {
	
	$sql = ("INSERT INTO utilisateur VALUES (null,'$login','$mdp','$nom','$prenom','$tel','$adresse','0','','')");

if ($mysqli->query($sql) === TRUE) {
    echo "New record created successfully";
}

$mysqli->close();

}
