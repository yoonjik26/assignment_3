function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
	// noLoop();
}

function draw() {
	// clear the background

	if (mouseIsPressed) {
		background(52, 51, 116);
	} else {
		background(150, 50, 50);
	}

	// set a fill color
	fill(255, 255, 255);

	// draw the ellipse
	var diameter = random(100, 200);
	ellipse(320, 180, diameter, diameter);
}
