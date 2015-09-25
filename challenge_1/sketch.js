function setup() {
	// create a place to draw
	createCanvas(640, 480);
	stroke(255, 255, 255);
	noLoop();
}

function draw() {
	colorMode(RGB, 255);
	// clear the background
	background(53, 55, 56);
	colorMode(RGB);
	// set a fill color
	for (var x = 0; x < 10; x++) {
			fill(x * 30, 0, 0);
			rect(x * 64 + 6.5, 215, 50, 50);
	}
}
