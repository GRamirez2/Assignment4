$(document).ready(function(){

// creating data values for each player, for health & strikeForce and printing

$("#player1").data("health",180).data("strikeForce", 23);
$("#bobbyHealth").text($("#player1").data("health"));

$("#player2").data("health", 125).data("strikeForce", 20);
$("#giadaHealth").text($("#player2").data("health"));

$("#player3").data("health", 100).data("strikeForce", 11);
$("#guyHealth").text($("#player3").data("health"));

$("#player4").data("health", 105).data("strikeForce", 25);
$("#altonHealth").text($("#player4").data("health"));

$("#textOnScreen1").show();
$("#textOnScreen2").hide();
$("#textOnScreen3").hide();
$("#textOnScreen4").hide();
$("#fightButton").hide();
$("#textOnScreen4").hide();
$("#textOnScreen5").hide();
var counter = 0;
var win = 3;



// move Bobby to fight area
$("#player1").on("click", function(){
	$("#player1").appendTo("#section2");
	$("#subSection").appendTo("#section3");
	$("#textOnScreen1").hide();
	$("#player1").off();
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
	$("#player2").off();
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
	$("#player3").off();
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
	$("#player4").off();
	counter ++
	if ( counter ==2){
			$("#fightButton").show();$("#section3").hide();$("#textOnScreen2").hide();
	}else{$("#textOnScreen2").show();$("#fightButton").hide();
		};
	
});/*END of Alton onClick*/
// is this where the end game function lives? and the start is at the very top, that also has
// a clear section2, 3 and one text area?

// BEGINING of Battle Button Fuction,counter++
$("#fightButton").on("click", function(){


var fighter1Strike = $("article section:first").data("strikeForce");
var fighter1Health = $("article section:first").data("health");
var fighter2Strike = $("article section:last").data("strikeForce");
var fighter2Health = $("article section:last").data("health");

var fighter1HealthWeaker = fighter1Health - fighter2Strike;
var fighter2HealthWeaker = fighter2Health - fighter1Strike;


console.log(fighter1Strike,fighter1Health,fighter2Strike,fighter2Health)

$("article section:first").data('health', fighter1HealthWeaker);
$("article section:first").attr('data-health', fighter1HealthWeaker);

$("article section:last").data('health', fighter2HealthWeaker);
$("article section:last").attr('data-health', fighter2HealthWeaker);

console.log($("article section:first").data("health"));
console.log($("article section:last").data("health"));

$("#textOnScreen3").show();
$("#textOnScreen3").html("YOU DEPLETED YOUR OPPONENTS HEALTH BY "+fighter1Strike+"<br>YOUR OPPONENT DEPLETED YOUR HEALTH BY "+fighter2Strike);

$("article aside:first").text(fighter1HealthWeaker);
$("article aside:last").text(fighter2HealthWeaker);

loose();
wingame();
nextPlayer();

});/*End of Battle Button Fuction*/

function loose(){

	if(($("article section:first").data('health')) <=0 ){
		$("#section2").remove();
		$("#textOnScreen3").hide();
		$("#textOnScreen2").hide();
		$("#textOnScreen4").show();/*NOT WORKING, need to link this to start game over*/
		$("#fightButton").hide();/*NOT WORKING?*/
		$("article section:last, article sections:first").remove();
		$("#section3").remove();
		// a function that starts the game over on button click, empties, section 2 and 3, plus the one text bar with health numbers. 	
			}
  }/*END of loose function*/

function nextPlayer(){
	// Beat Fighter 2, choose new player or win game if beat 3 players
	if(($("article section:last").data('health')) <= 0){
				win--;
				$("article section:last").remove();
				counter --
		if ( counter ==2){
			$("#fightButton").show();$("#section3").hide();$("#textOnScreen2").hide();
		}else{$("#textOnScreen2").show();$("#fightButton").hide();$("#section3").show();$("#textOnScreen3").hide();
			var fighter1Strike = $("article section:first").data("strikeForce");
			var fighter2Strike = $("article section:last").data("strikeForce");
			var fighter1StrikeStronger = fighter1Strike +25
		// need to get the math to work with the new strikeforce, and push the number to the health, make function for the button second use. 
		$("article section:first").data('strikeForce', fighter1StrikeStronger);
		$("article section:first").attr('data-strikeForce', fighter1StrikeStronger);
		$("#textOnScreen3").html("YOU DEPLETED YOUR OPPONENTS HEALTH BY "+fighter1StrikeStronger+"<br>YOUR OPPONENT DEPLETED YOUR HEALTH BY "+fighter2Strike);
			};
			console.log(counter+"==2")
			console.log($("article section:last").data('health')+" fighter2 healthe number");
			}

	wingame();
	loose();
  };/*END OF NEXTPLAYER FUNCTION*/	


function wingame (){

//Player 1 wins game 
	if (win == 0){
	$("#textOnScreen5").Show();
	$("#section2").fadeOut( "fast" );
	$("#textOnScreen3").hide();
	$("#fightButton").hide();
	$("article section:last, article sections:first").remove();
	$("#textOnScreen3").clear();
	// on click to start game over. empty secions and one text area
	}

};/*END of WIN FUNCTION*/	






// run the math on the battle numbers from elements in parent div, if dead or win flip counter

// 	new strike force number on screen


	
// 	create  "you lost, want to play again" button to restart the game. 
// 


	



});