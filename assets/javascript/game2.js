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

// creating data values for each player, in array of life,health&strikeForce
$("#player1").data("life", {health: 150, strikeForce: 25});
// console.log($("#bobbyHealth").data("life").strikeForce, $("#bobbyHealth").data("life").health);
$("#bobbyHealth").text($("#player1").data("life").health);

$("#giadaHealth").data("life", {health: 125, strikeForce: 50});
$("#giadaHealth").text($("#giadaHealth").data("life").health);

$("#guyHealth").data("life", {health: 100, strikeForce: 15});
$("#guyHealth").text($("#guyHealth").data("life").health);

$("#altonHealth").data("life", {health: 100, strikeForce: 75});
$("#altonHealth").text($("#altonHealth").data("life").health);

$("#fightButton").hide();
$("#textOnScreen2").hide();
$("#textOnScreen3").hide();
$("#textOnScreen4").hide();

var counter = 0;


// write fuction that has a counter, when the fighters are selected they
// need to pass info to a new id, if a value, could be their health value, 
// total is >100 than allow another player to be selected, if not no new player
// can be selected.(another way is to make a fuction above this all these onclicks that
// have a var count=0 and on each click count+=1, if (count==2) then no more clicks.
// I could this for the begining and set the second action in the fighting fuction.



// move Bobby to fight area
$("#player1").on("click", function(){

	$("#textOnScreen1").hide();/*controling the message on screen*/
	$("#player1").appendTo("#section2");
	$("#subSection").appendTo("#section3");
	
// insert playerTwoSelect funtion that will turn the second selector off and on
	$("#player1").attr("id", "#fighter1");
	// $("#section2").html("#fighter1");/*switched? */
	console.log($("#bobbyHealth").data("life"));	/*This works fine*/
	// console.log($("#fighter1").data("life").strikeForce); /*This isn't working*/
	
	// counter ++
	// console.log("counter number is "+counter)
	
});



 // move Giada to fight area
$("#player2").on("click", function(){
	$("#player2").appendTo("#section2");
	$("#subSection").appendTo("#section3");
	counter ++
	// console.log(counter)/*Why can't this see the counter?*/

});

// move Guy to fight area
$("#player3").on("click", function(){
	$("#player3").appendTo("#section2");
	$("#subSection").appendTo("#section3");
});

// move Alton to fight area
$("#player4").on("click", function(){
	$("#player4").appendTo("#section2");
	$("#subSection").appendTo("#section3");
	
});


// Need to add more events to the move fuction, adding data (maybe)
// and assigning the fighters new IDs.

// I might be able to give a condition on the new IDs that will disable the click.

// $("#fightButton").on("click", function(){
// 	$("#newID")does something, and other $("newID") does something
// });

// Begining of BATTLE FUNCTION








});