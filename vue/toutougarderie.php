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
			?><a href="../modele/deconnexion.php">se deconnecter</a><?php
		}
		
	?>
	

    

  
</body>
</html>