
(function () {
	
   document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
 		var elem = document.getElementById('p_menu');
 		
 		console.log(submenu);

 		elem.addEventListener( "click" , function(show) {
 			document.getElementById('submenu').style.display="block";
 			

  });

 });
}());