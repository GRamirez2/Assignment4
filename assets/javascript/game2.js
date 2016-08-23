$(document).ready(function(){

// write fuction that has a counter, when the fighters are selected they
// need to pass info to a new id, if a value, could be their health value, 
// total is >100 than allow another player to be selected, if not no new player
// can be selected.(another way is to make a fuction above this all these onclicks that
// have a var count=0 and on each click count+=1, if (count==2) then no more clicks.
// I could this for the begining and set the second action in the fighting fuction.

// move Bobby to fight area
$("#player1").on("click", function(){
	$("#player1").appendTo("#section2");
	$("#subSection").appendTo("#section3");
});

 // move Giada to fight area
$("#player2").on("click", function(){
	$("#player2").appendTo("#section2");
	$("#subSection").appendTo("#section3");
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

$("#fightButton").on("click", function(){
	$("#newID")does something, and other $("newID") does something
});









});