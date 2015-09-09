// JavaScript Document

var imagesList =
//insert image URL below. example= images/image.jpg
["Images/tableSlide.jpg","Images/slideshow.jpg"]
var showCanvas = null;
var showCanvasCtx = null;
var img = document.createElement("img");
var currentImage = 0;
var revealTimer;

window.onload = function() {
	showCanvas = document.getElementById('showCanvas');
	showCanvasCtx = showCanvas.getContext('2d');
	
	img.setAttribute('width','1366');
	img.setAttribute('height','500');
	switchImage();
	
	// start the animation
	setInterval(switchImage,3000);	
}

function switchImage() {
	img.setAttribute('src',imagesList[currentImage++]);
	if (currentImage >=	imagesList.length)
		currentImage=0;
	
	showCanvasCtx.globalAlpha = 0.1;
	revealTimer = setInterval(revealImage,100);
}

function revealImage() {
	showCanvasCtx.save();
	showCanvasCtx.drawImage(img,0,0,1366,500);
	showCanvasCtx.globalAlpha += 0.1;
	if (showCanvasCtx.globalAlpha >= 1.0)
		clearInterval(revealTimer);
	showCanvasCtx.restore();	
}