$(document).ready(function(){

// This idea didn't work, I trying data for each player
// var players = {

// 	player1: {health:150,strikeForce: 25},

// 	player2: {health:125,strikeForce: 50},
					
// 	player3: {health:100,strikeForce: 15},
// 			
// 	player4: {health:175,strikeForce: 75},
// 			
// 	fighter1: {health:0,strikeForce: 0},

// 	fighter2: {health:0,strikeForce: 0},

// 	startGame:"",
// 	nextPlayer:"",
// 	battle:"",
// 	win:"",
// 	lose:"",
// 	battleZone:"t/f",
// }

// creating data values for each player, for health & strikeForce
$("#player1").data("health",150). data("strikeForce", 25);
$("#bobbyHealth").text($("#player1").data("health"));

$("#player2").data("health", 125).data("strikeForce", 50);
$("#giadaHealth").text($("#player2").data("health"));

$("#player3").data("health", 100).data("strikeForce", 15);
$("#guyHealth").text($("#player3").data("health"));

$("#player4").data("health", 100).data("strikForce", 75);
$("#altonHealth").text($("#player4").data("health"));

$("#fightButton").hide();
$("#textOnScreen2").hide();
$("#textOnScreen3").hide();
$("#textOnScreen4").hide();

var counter = 0;
var player1H = 0;


// move Bobby to fight area
$("#player1").on("click", function(){

	$("#textOnScreen1").hide();/*controling the message on screen*/
	$("#player1").appendTo("#section2");
	$("#subSection").appendTo("#section3");
	
// insert playerTwoSelect funtion that will turn the second selector off and on
	counter ++
	if ( counter ==2){
		$("#fightButton").show();$("#section3").hide();$("#textOnScreen2").hide();
	}else{$("#section2").show();$("#fightButton").hide();$("#textOnScreen2").show();
		};


});




 // move Giada to fight area
$("#player2").on("click", function(){
	$("#player2").appendTo("#section2");
	$("#subSection").appendTo("#section3");
	counter ++
	if ( counter ==2){
		$("#fightButton").show();$("#section3").hide();$("#textOnScreen2").hide();
	}else{$("#section2").show();$("#fightButton").hide();$("#textOnScreen2").show();
		};
	// console.log(counter)/*Why can't this see the counter?*/

});

// move Guy to fight area
$("#player3").on("click", function(){
	$("#player3").appendTo("#section2");
	$("#subSection").appendTo("#section3");
	counter ++
	if ( counter ==2){
		$("#fightButton").show();$("#section3").hide();$("#textOnScreen2").hide();
	}else{$("#section2").show();$("#fightButton").hide();$("#textOnScreen2").show();
		};
});

// move Alton to fight area
$("#player4").on("click", function(){
	$("#player4").appendTo("#section2");
	$("#subSection").appendTo("#section3");
	counter ++
	if ( counter ==2){
		$("#fightButton").show();$("#section3").hide();$("#textOnScreen2").hide();
	}else{$("#section2").show();$("#fightButton").hide();$("#textOnScreen2").show();
		};
	
});
// run the math on the battle numbers from elements in parent div, if dead or win flip counter
// $("#fightButton").on("click", function(){
// 	($("#section2":last-child).data("health")) - ($("#section2":first-child).data("strikeForce"));
// 	($("#section2":first-child).data("health")); - ($("#section2":last-child).data("strikeForce"));
// 	html data health and strike force for each to textOnScreen4

// 	if last child health is <= 0 add to first child strikeforce and open counter, if first child is <=0, loose game.
// 	Toogle on #textOnScreen4 until win or loose. 
	
// 	create huge "you lost, want to play again" button to restart the game. 
// };





// Need to add more events to the move fuction, adding data (maybe)
// and assigning the fighters new IDs.

// I might be able to give a condition on the new IDs that will disable the click.

// $("#fightButton").on("click", function(){
// 	$("#newID")does something, and other $("newID") does something
// });

// Begining of BATTLE FUNCTION

var player1H=($("#player1").data("health"));
console.log(player1H + "plan b");





});