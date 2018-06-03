
(function () {
	
   document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

 var picturesArr = ["https://www.srbijatrade.rs/wp-content/uploads/2018/03/priroda.jpg", 
 "https://e-oboi.com/wp-content/uploads/2018/03/1268952669.jpg.pagespeed.ce.GTFN9MyzbE.jpg", 
 "https://natworld.info/wp-content/uploads/2018/01/%D0%A1%D0%BE%D1%87%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BC%D1%83-%D0%9F%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0.jpeg",
 "http://germanygid.ru/wp-content/uploads/bfi_thumb/93724896-e1448466659977-30cv5tuml0nrcltjn6x9fu.jpg"];
 
 var number = 0;

 var img = document.getElementById('first_img');

console.log(img);

img.src = picturesArr[number];






 var leftButton = document.getElementById('left_button');
 var rightButton = document.getElementById('right_button');


 rightButton.onclick = function() {
 	 var img = document.getElementById('first_img');

		console.log(img);

		img.src = picturesArr[number++];
		 if (number == picturesArr.length){
		 	number=0;
		 }
 }

 leftButton.onclick = function() {

 	 var img = document.getElementById('first_img');

		number = number-1;
		if (number<0){
			number = picturesArr.length-1;
		}
		img.src = picturesArr[number];


 }

var left=document.getElementById("left");

var right=document.getElementById("right");

 right.onclick = function() {
 	 var img = document.getElementById('first_img');

		console.log(img);

		img.src = picturesArr[number++];
		 if (number == picturesArr.length){
		 	number=0;
		 }
 }
 left.onclick = function() {

 	 var img = document.getElementById('first_img');

		number = number-1;
		if (number<0){
			number = picturesArr.length-1;
		}
		img.src = picturesArr[number];


 }


 });
}());