$(document).ready(function(){


	// creating data values for each player, for health & strikeForce and printing

	$("#player1").data("health",150).data("strikeForce", 30);
	$("#bobbyHealth").text($("#player1").data("health"));

	$("#player2").data("health", 155).data("strikeForce", 20);
	$("#giadaHealth").text($("#player2").data("health"));

	$("#player3").data("health", 150).data("strikeForce", 10);
	$("#guyHealth").text($("#player3").data("health"));

	$("#player4").data("health", 150).data("strikeForce", 80);
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
			$("#textOnScreen4").show();/* need to style this and link this to start game over*/
			$("#fightButton").hide();
			$("article section:last, article sections:first").remove();
			$("#section3").remove();
			// a function that starts the game over on button click, empties, section 2 and 3, plus the one text bar with health numbers. 	
				}
	  }/*END of loose function*/

	function nextPlayer(){
		// Beat Fighter 2, choose new player or win game if beat 3 players
		if(($("article section:last").data('health')) <= 0){
			$("article section:last").remove();
			win--;
			counter --;/*not sure this is how I need this counter anymore?*/
			}

		if (win == 0){
			wingame();
			}

		if(counter == 1){
			$("#textOnScreen2").show();$("#section3").show();
			$("#fightButton").hide();$("#textOnScreen3").hide();
			var fighter1Strike = $("article section:first").data("strikeForce");
			var fighter2Strike = $("article section:last").data("strikeForce");
			var fighter1StrikeStronger = fighter1Strike +50;
			$("article section:first").data('strikeForce', fighter1StrikeStronger);
			$("article section:first").attr('data-strikeForce', fighter1StrikeStronger);
			$("#textOnScreen3").html("YOU DEPLETED YOUR OPPONENTS HEALTH BY "+fighter1StrikeStronger+"<br>YOUR OPPONENT DEPLETED YOUR HEALTH BY "+fighter2Strike);
							
			console.log(counter+"==2")
			console.log(fighter1Strike+"and"+fighter1StrikeStronger);
			};
				
		wingame();
		loose();
	  };/*END OF NEXTPLAYER FUNCTION*/	


	function wingame (){
		//Player 1 wins game 
		if (win == 0){
		$("#textOnScreen5").show();
		$("#section2").empty();
		$("#textOnScreen3").hide();
		$("#fightButton").hide();
		$("article section:last, article sections:first").remove();
		$("#textOnScreen3").empty();
		$("#textOnScreen2").hide();
		// Need to make a restart game function

		}

	 };/*END of WIN FUNCTION*/	

	 /*end of start game*/
	// 	create  "you lost, want to play again" button to restart the game. 

});