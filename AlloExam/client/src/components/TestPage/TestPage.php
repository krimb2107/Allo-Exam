<?php
include('..\interface1\config.php');


?>
<!DOCTYPE html>

<html>
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
	<script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <base target="_blank">

 
</head>
<style>
	  #cam{
		  width: displayWidth;
		  height: displayHeight;
		  border: 1px solid black;
		  position: relative; 		   
		  left:150px;
		  top:50px;
	  }
	  #btn{
		  border:2px solid black ;
		  position: relative; 		   
		  left:850px;
		  top:-325px;
		  color: white;
		  font-size:25px;
		  background: #08376B;
		  font-weight: bold;
		  cursor: pointer;
		  border-radius: 10px;
		  padding: 10px 20px;
	  }
	  #startButton{
	      position: relative;
		  left:890px;
		  top: -325px;
	  }
	         
	 *{ margin: 0;
	      padding:0 ;
		  font-family: sans-serif;
	   }
	   
	  .arriere-plan{
	      height: 100vh;
		  background-position: center;
		  background-color:  #F1F1F1 ;/*#ECEEF1 #E6E9F5 */
		  background-size: cover;
		  overflow: hidden;
		  position: static; 
	   }
	   
	   .nav-bar{
	      display: flex;
		  padding: 20px 120px;
	   }
	   
	    .nav-logo img{
	      width:175px;
		  float: left;
	   }
	   
	   .nav-links{
	      flex: 1;
		  float: right;
	   }
	   
	   .nav-links ul{
	       margin-left: 400px;
		   display: inline;
	   }
	   
	   .nav-links ul li{
	       list-style: none;
		   display: inline-block;
		   padding: 20px 50px;
		   
	   }
	   
	   .nav-links ul a{
	       color: black;
		   text-decoration: none;
		   font-size: 15px ;
		   background-color: #ECEEF1;
	   }
	   
	   .nav-links ul li::after{
	       content: '';
		   width: 0;
		   height: 2px;
		   background: #08376B;
		   display: block;
		   margin: auto;   
		   transition: .5s;
	   }
	   
	   .nav-links ul li:hover::after{
	        width: 100%;
	   }
	    .btn{
	       padding: 10px 20px;
		   border: 0;
		   color: white;
		   font-size:25px;
		   background: #08376B;
		   font-weight: bold;
		   cursor: pointer;
		   border: .5px solid black;
		   border-radius: 10px;
		   position:relative;
		   top:10px;
		   left:55px;
	   }
	  
	   .btn:hover{
           color:#E6E6FA;
		   } 
	  .btna{
	       padding: 7px 1px;
		   border: 0;
		   color: green;
		   font-size:25px;
		   background: white;
		   font-weight: bold;
		   cursor: pointer;
		   border: .5px solid black;
		   border-radius: 10px;
		   position:relative;
		   top:4px;
		   left:40px;
		   z-index:2;
	   }
	.trnsfr{
		position:relative;
		top:-350px;
		left:900px;
	}
	</style>

<body>
<div class="arriere-plan">
	<div class="nav-bar">
	     <div  class="nav-logo">
		     <img src="..\image\logo3.PNG">
	     </div>
		 <div class="nav-links">
		     <ul><br>
			   &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp 
		 &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp 
              &nbsp  &nbsp &nbsp  &nbsp  &nbsp 		 
			     <a href="#"><li><b>HOME</b></li></a>
			     <a href="#"><li><b>ABOUT</b></li></a>
			     <a href="#"><li><b>CONTACT US</b></li></a>
		     </ul> 
		 </div>  
    </div><hr>
	
<div id="container">
    <audio id="aud" ></audio>
	<video id="cam" controls autoplay ></video>
	<br><br><br><br><br><br>
    <div class="trnsfr">
	     <input  id='b1' class="btna" type="text" name="code" placeholder=" Saisir un code réunion" required pattern="[A-Za-z0-9]" style="position:relative;left:px;">
		     <i class="fa fa-keyboard"  style="font-size:20px;color:black;z-index:10;position:relative;top:3px;left:-5px;" ></i>
		 </input>
		 <br><br>
		 <button id='b2' type="button" class="btn">Rejoindre la réunion</button>  
     </div>
	
	<div>
        <span id="errorMsg"></span>
    </div>
</div>

<script src="TestPage.js"></script>	 
</body>
</html>


