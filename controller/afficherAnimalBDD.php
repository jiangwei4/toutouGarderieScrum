<?php


$idUtilisateur = $_SESSION['id'];
$host ='localhost';
	$user='root';
	$bdd='toutougarderie';
	
	$mysqli = new mysqli($host, $user, "", $bdd);
	
	$affichage = '<table><tr><th>nom</th><th>race</th><th>poids</th><th>couleur</th></tr>';
if ($mysqli->connect_errno) {
    echo "Echec lors de la connexion à MySQL : (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
} else {
	
	$res = $mysqli->query("SELECT * FROM animaux where utilisateurId='$idUtilisateur'");

	while ($row = mysqli_fetch_row($res)){
		$affichage.='<tr><td>' .$row[4].'</td><td>' .$row[1].'</td><td>' .$row[2].'</td><td>' .$row[3].'</td></tr>'; //recuperation de l'id
	}
	
}

echo $affichage.='</table>';