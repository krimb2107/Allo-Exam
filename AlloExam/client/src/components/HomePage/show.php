<!DOCTYPE html>
<html lang="fr">
<head>
       <title>fichier2.html/ affichage</title>
	   <meta charset="UTF-8">
	   <style>
  tableau-style {
	border-collapse: collapse;
	min-width: 400 px;
    width:auto;
	box-shadow: 0  5px 50px rgba(0,0,0,0,.15);
	margin: 100px auto;
	border: 1px solid midnightblue;
	}
	
  thead tr {
	  background-color: midnightblue;
	  color:#fff;
	  text-align: midle;
  }	
  
  th ,td {
	  padding: 7px 10px;
  } 

  tbody tr ,td ,th {
	  border: 1px solid #ddd;
	  
  }
  
  tbody tr:nth-child(even) {
	 background-color: #f3f3f3;
	  
  }
  
  tbody tr:last-of-type{
	 border-bottom: 2px solid  midnightblue;  
  }
	
  </style>
</head>

<body>
<h1>Affichage des données issue par le rapport /h1>

<?php
if(isset($_post['envoyer']))
{ if(isset($_POST["nom"]) && isset($_POST["prénom"]) && isset($_POST["mail"]) && isset($_POST["message"]) && isset($_POST["fichier"]) )
	{ if(!empty($_POST["nom"]) && !empty($_POST["prénom"]) && !empty($_POST["mail"]) && !empty($_POST["message"]) && !empty($_POST["fichier"]) )
		{
		 $nom=htmlspecialchars($_POST["nom"]);
		 $prénom=htmlspecialchars($_POST["prénom"]);
		 $mail=htmlspecialchars($_POST["mail"]);
		 $message=htmlspecialchars($_POST["message"]);
		 if($FileType != "jpg" && $FileType != "png" && $FileType != "jpeg" && $FileType != "word" && $FileType != "PDF" ) 
		 {
            echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
            $uploadOk = 0;
         }
		
	    }
	}
}

?>

       
 <table class="tableau-style">
    <thead>
	  <tr>
           <th>NOM</th>
           <th>PRENOM</th>
           <th>Mail</th>
           <th>Gender</th>
           <th>Mêssage</th>
	  </tr>
    </thead>
	
	<tbody>
	   <tr> 
	      <td><?php echo $_POST['nom']; ?></td>
		  <td><?php echo $_POST['prénom']; ?> </td>
		  <td><?php echo $_POST['mail']; ?> </td>
		  <td><?php echo $_POST['gender']; ?> </td>
		  <td><?php echo $_POST['message']; ?> </td>
	   </tr> 	   
	   
	   
	   
	</tbody>
</table>


</body>

</html>