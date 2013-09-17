/**
 * @author Mikey
 */
var sound;
const scale_factor = 10;
const num_width=75;
const num_height=76;

function copyImage(source){
	var first = document.getElementById("first");
	var second = document.getElementById("second");
	
	if(source==-1){
		refresh(first,second);
	}else{
	first.setAttribute("data-current", second.getAttribute("data-current"));
	first.src=second.src;
	second.setAttribute("data-current", source);
	second.src="images/"+source+".png";
	}
}
function refresh(first,second){
	first.src="images/0.png";
	second.src="images/0.png";
	first.setAttribute("data-current", "0");
	second.setAttribute("data-current", "0");
}
function numSelected(id){
	var img = document.getElementById("num"+id);
	img.width = num_width + scale_factor;
	img.height = num_height + scale_factor;
}

function numDeselected(id){
	var img = document.getElementById("num"+id);
	img.width = num_width;
	img.height = num_width;
}

function playsound(){
	var first = document.getElementById("first").dataset.current;
	var second = document.getElementById("second").dataset.current;
	sound = document.getElementById("numSound"); 
	if(first==0 && second==0){
		sound.src="sounds/0.mp3";
	}
	else if(first==0){
		sound.src="sounds/"+second+".mp3";
	}
	else{
		sound.src = "sounds/"+first+second+".mp3";
	}
	sound.play();
}
/*
function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.effectAllowed="copy";
	ev.dataTransfer.setData("Text", ev.target.id);
	return true;
}

function drop(ev) {
	ev.dataTransfer.dropEffect="copy";
	var data = ev.dataTransfer.getData("Text");
	ev.target.appendChild(document.getElementById(data));
	ev.preventDefault();
}
*/

/*
function handleDragStart(e) {
  this.style.opacity = '0.4';  // this / e.target is the source node.
}

var nums = document.querySelectorAll('#wholepage .number');
[].forEach.call(nums, function(num) {
  num.addEventListener('dragstart', handleDragStart, false);
});

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }

  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

  return false;
}

function handleDragEnter(e) {
  // this / e.target is the current hover target.
  this.addClassName('over');
}

function handleDragLeave(e) {
  this.removeClassName('over');  // this / e.target is previous target element.
}

var cols = document.querySelectorAll('#wholepage .number');
[].forEach.call(nums, function(num) {
  num.addEventListener('dragstart', handleDragStart, false);
  num.addEventListener('dragenter', handleDragEnter, false);
  num.addEventListener('dragover', handleDragOver, false);
  num.addEventListener('dragleave', handleDragLeave, false);
});
*/