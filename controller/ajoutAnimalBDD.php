<?php
	session_start();
$nom = $_GET['nom'];
$race = $_GET['race'];
$couleur = $_GET['couleur'];
$poids = $_GET['poids'];
$idUtilisateur = $_SESSION['id'];

echo $nom.'  '.$race.'  '.$couleur.'  '.$poids.'  '.$idUtilisateur;
$host ='localhost';
	$user='root';
	$bdd='toutougarderie';
	
	$mysqli = new mysqli($host, $user, "", $bdd);
if ($mysqli->connect_errno) {
    echo "Echec lors de la connexion à MySQL : (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
} else {
	
	$sql = ("INSERT INTO animaux VALUES (null,'$race','$poids','$couleur','$nom','','$idUtilisateur')");

if ($mysqli->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
	echo "Error: " . $sql . "<br>" . $mysqli->error;
}

$mysqli->close();

}
