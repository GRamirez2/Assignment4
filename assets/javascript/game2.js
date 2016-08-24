$(document).ready(function(){

// creating data values for each player, for health & strikeForce and printing

$("#player1").data("health",150).data("strikeForce", 25);
$("#bobbyHealth").text($("#player1").data("health"));

$("#player2").data("health", 125).data("strikeForce", 50);
$("#giadaHealth").text($("#player2").data("health"));

$("#player3").data("health", 100).data("strikeForce", 15);
$("#guyHealth").text($("#player3").data("health"));

$("#player4").data("health", 100).data("strikeForce", 75);
$("#altonHealth").text($("#player4").data("health"));

$("#textOnScreen1").show();
$("#textOnScreen2").hide();
$("#textOnScreen3").hide();
$("#textOnScreen4").hide();
$("#fightButton").hide();

var counter = 0;
var win = 3;



// move Bobby to fight area
$("#player1").on("click", function(){
	$("#player1").appendTo("#section2");
	$("#subSection").appendTo("#section3");
	$("#textOnScreen1").hide();
	counter ++
	if ( counter ==2){
		$("#fightButton").show();$("#section3").hide();$("#textOnScreen2").hide();
	}else{$("#textOnScreen2").show();$("#fightButton").hide();
		};
	
});/*END of Bobby onClick*/




 // move Giada to fight area, counter++, and control instructions on screen
$("#player2").on("click", function(){
	$("#player2").appendTo("#section2");
	$("#subSection").appendTo("#section3");
	$("#textOnScreen1").hide();
	counter ++
	if ( counter ==2){
			$("#fightButton").show();$("#section3").hide();$("#textOnScreen2").hide();
	}else{$("#textOnScreen2").show();$("#fightButton").hide();
		};

});/*END of Giada onClick*/


// move Guy to fight area,counter++, and control instructions on screen
$("#player3").on("click", function(){
	$("#player3").appendTo("#section2");
	$("#subSection").appendTo("#section3");
	$("#textOnScreen1").hide();
	counter ++
	if ( counter ==2){
		$("#fightButton").show();$("#section3").hide();$("#textOnScreen2").hide();
	}else{$("#textOnScreen2").show();$("#fightButton").hide();
		};
});/*END of Guy onClick*/


// move Alton to fight area,counter++, and control instructions on screen
$("#player4").on("click", function(){
	$("#player4").appendTo("#section2");
	$("#subSection").appendTo("#section3");
	$("#textOnScreen1").hide();
	counter ++
	if ( counter ==2){
			$("#fightButton").show();$("#section3").hide();$("#textOnScreen2").hide();
	}else{$("#textOnScreen2").show();$("#fightButton").hide();
		};
	
});/*END of Alton onClick*/


// BEGINING of Battle Button Fuction,counter++
$("#fightButton").on("click", function(){
	console.log($("article section:first").data("strikeForce"));
	console.log($("article section:first").data("health"));
	console.log($("article section:last").data("strikeForce"));
	console.log($("article section:last").data("health"));

	($("article section:last").data("health"))-($("article section:first").data("strikeForce"))
	$("article section:last").text($("article section:last").data("health"));



	});



// run the math on the battle numbers from elements in parent div, if dead or win flip counter

// 	($("#section2":last-child).data("health")) - ($("#section2":first-child).data("strikeForce"));
// 	($("#section2":first-child).data("health")); - ($("#section2":last-child).data("strikeForce"));
// 	html data health and strike force for each to textOnScreen4

// 	if last child health is <= 0 add to first child strikeforce and open counter, if first child is <=0, loose game.
// 	Toogle on #textOnScreen4 until win or loose. 
	
// 	create  "you lost, want to play again" button to restart the game. 
// 



// console.log($("#player1").data("health"));
// console.log($("#section2":first-child).data("health"));

// If I can't get to the data I'll need to write it to a variable and loop through it for a match.
// var player1H=($("#player1").data("health"));
// console.log(player1H + "option b for battle function is to call a variable that has been assigned the number I need");

	



});