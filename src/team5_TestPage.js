/**
 * @author Daniel J Bray
 */
const DEBUG = false;

const ans_length = 10;
const guess_width = 125;
const guess_height = 125;
const scale_factor = 10;

var guesses;
var images;
var ans_index;
var answer;
var sound;
var answer_sound;

var right;
var wrong;

var timer;

function init(){
	right = document.getElementById("correct");
	wrong = document.getElementById("wrong");
	
	guesses = new Array();
	images = new Array();
	
	//Initialize answer index
	ans_index = Math.floor(Math.random()*10);
	
	//Initialize variables 0 to ans_index-1 with random values
	for(var i=0; i<ans_length; i++){
		var temp = Math.floor(Math.random()*10)+(i*10);
		while(temp==answer){
			temp = Math.floor(Math.random()*10)+(i*10);
		}
		guesses[i] = temp;
	}
	
	//Initialize answer
	answer = guesses[ans_index];
	
	randomSwaps();
	loadImages();
	initSound();
	
	//DEBUG
	if(DEBUG) alert(answer);
}

onload = init;

function randomSwaps(){
	for(var repeat = 0; repeat < 15; repeat++){
		var i = Math.floor(Math.random()*10);
		var j = Math.floor(Math.random()*10);
		//swap
		var temp = guesses[i];
		guesses[i] = guesses[j];
		guesses[j] = temp;
	}
}

function loadImages(){
	for(var i=0; i<ans_length; i++){
		var img = document.getElementById("ans_"+i);
		img.src = "images/numbers/" + guesses[i] + ".png";
		img.width = guess_width;
		img.height = guess_height;
		images[i] = img;
	}
}

function initSound(){
	sound = document.getElementById("audio_sound");
	sound.src = "sounds/" + answer + ".mp3";
	answer_sound = document.getElementById("answer_sound");
}

function playSound(){
	sound.src = "sounds/" + answer + ".mp3";
	sound.play();
}

function assertGuess(id){
	if(guesses[id]==answer){
		//start timer	
		displayRight(1);
		//end timer	
		init();
	}
	else{
		//start timer
		displayWrong(1);
		//end timer
	}
}

function displayRight(b){
	clearTimeout(timer);
	if(b == 0){
		right.style.display = 'none';
	}
	else{
		right.style.display = 'block';
		wrong.style.display = 'none';
		answer_sound.src = "sounds/good job.mp3";
		answer_sound.play();
		timer = setTimeout("displayRight(0)", 2000);
	}
}

function displayWrong(b){
	clearTimeout(timer);
	if(b == 0){
		wrong.style.display = 'none';
	}
	else{
		wrong.style.display = 'block';
		right.style.display = 'none';
		answer_sound.src = "sounds/try again.mp3";
		answer_sound.play();
		timer = setTimeout("displayWrong(0)", 2000);
	}
}

function imageSelected(id){
	images[id].width = guess_width + scale_factor;
	images[id].height = guess_height + scale_factor;
	document.body.style.cursor = "pointer";
}

function imageDeselected(id){
	images[id].width = guess_width;
	images[id].height = guess_width;
	document.body.style.cursor = "default";
}
