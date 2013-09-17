/**
 * @author Daniel J Bray and Steven Angles
 */
const num_images = 100;

var images;
var starter;
var panel;
var counter;
var len;
var player;

function init() {
	images = new Array();
	for(var i = 0; i < num_images; i++) {
		images[i] = new Image();
		images[i].src = "images/numbers/" + i + ".png";
	}
	panel = document.getElementById("numberPanel");
	player = document.getElementById("audioPlayer");
}

onload = init;

function count(id) {
	clearTimeout(starter);
	counter = id * 10;
	len = counter + 10;
	iterate();
}

function iterate() {
	if(counter == len) {
		panel.src = "";
		clearTimeout(starter);
	} 
	else {
		player.src = "sounds/" + counter + ".mp3";
		player.play();
		panel.src = images[counter].src;
		counter++;
		starter = setTimeout("iterate()", 5000);
	}
}