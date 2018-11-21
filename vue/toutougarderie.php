<!doctype html>
<html lang=fr>
<head>
    <meta charset="UTF-8">
	<meta name="viewport" content="width=device-width"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<meta name="viewport" content="width=device-width, minimum-scale=0.25"/>
	<meta name="viewport" content="width=device-width, maximum-scale=5.0"/>
	<meta name="viewport" content="width=device-width, user-scalable=no"/>
	<meta name="viewport" content="width=device-width, target-densitydpi=device-dpi"/>
    <script type="text/javascript" src="../controller/js.js"></script>
    <link rel="stylesheet" type="text/css" href="toutougarderie.css" />
    <title>toutou garderie</title>
</head>
<body>
   <?php 
		session_start();
		if ((!isset($_SESSION['id'])) || is_nan($_SESSION['id'])){
			include("../modele/connexion.php");
		}
		
		if ((isset($_SESSION['id'])) && (!is_nan($_SESSION['id']))){
			?><a href="../modele/deconnexion.php">se deconnecter</a><br>
			<button onclick="afficherAjouterAnimal()">ajouter un animal</button>
			<div id="formulaireAjoutAnimal" display="none"><h1><center><b>Ajouter Animal</b></center></h1>
			<form class="w3-container" name="formulaire1">
				<label class="w3-label w3-text-blue">
					<b>Race</b>
				</label>
				<input name="race" type="text" id="race" required>
				<label>
					<b>Poids</b>
				</label>
				<input name="poids" type="text" id="poids" required>
				<label>
					<b>nom</b>
				</label>
				<input name="nom" type="text" id="nom" required>
				<label>
					<b>couleur</b>
				</label>
				<input name="couleur" type="text" id="couleur" required>
				
				
				<br/>
				<br/><br/>
				<button onclick="effacer3()">effacer</button>
				<button onclick="ajoutAnim()">ajouter</button>
			</form></div>
			<button onclick="afficherAnimal()">afficher animal</button>
			<div id="afficherAnimal"><?php include("../controller/afficherAnimalBDD.php");?></div><?php
		
			
		}
		
	?>
	

    

  
</body>
</html>