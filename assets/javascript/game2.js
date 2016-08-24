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


var fighter1Strike = $("article section:first").data("strikeForce");
var fighter1Health = $("article section:first").data("health");
var fighter2Strike = $("article section:last").data("strikeForce");
var fighter2Health = $("article section:last").data("health");

var fighter1HealthWeaker = fighter1Health - fighter2Strike;
var fighter2HealthWeaker = fighter2Health - fighter1Strike;


console.log(fighter1Strike,fighter1Health,fighter2Strike,fighter2Health)
// console.log(fighter1StrikeStronger)
// console.log(fighter1HealthWeaker)
// console.log(fighter2HealthWeaker)

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

if($("article section:first").data('health') <=0 ){
	$("#fightButton").html("YOU LOST!<br>PLAY AGAIN?");
	$("#section2").fadeOut( "fast" );
	$("#textOnScreen3").hide();
	$("article section:last, article sections:first").remove();
	// a function that starts the game over on click. 	
		}

if(fighter2Health <= 0){
			;win--;
			$("article section:last").remove();
			counter --
	if ( counter ==2){
		$("#fightButton").show();$("#section3").hide();$("#textOnScreen2").hide();
	}else{$("#textOnScreen2").show();$("#fightButton").hide();$("#section3").show();$("#textOnScreen3").hide();
	var fighter1StrikeStronger = fighter1Strike +25
	$("article section:first").data('strikeForce', fighter1HealthWeaker);
	$("article section:first").attr('data-strikeForce', fighter1HealthWeaker);
		};



			console.log(counter+"==2")
		}
if (win == 0){
	$("#fightButton").html("YOU WON!<br>PLAY AGAIN?");
	$("#section2").fadeOut( "fast" );
	$("#textOnScreen3").hide();
	$("article section:last, article sections:first").remove();
}

	});/*End of Battle Button Fuction*/




// run the math on the battle numbers from elements in parent div, if dead or win flip counter

// 	html data health and strike force for each to textOnScreen4

// 	if last child health is <= 0 add to first child strikeforce and open counter, if first child is <=0, loose game.
// 	Toogle on #textOnScreen4 until win or loose. 
	
// 	create  "you lost, want to play again" button to restart the game. 
// 


	



});