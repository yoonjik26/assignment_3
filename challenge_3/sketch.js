function setup() {
	// create a place to draw
	createCanvas(640, 480);
	strokeWeight(1);
	stroke(255, 255, 255);
	// noLoop();
}

function draw() {
	// clear the background
	background(150, 7, 19);

	// draw the line
	line(mouseX, 0, mouseX, 480);
	line(0, mouseY, 640, mouseY);

	// draw the ellipse
	fill(150, 7, 19);
	ellipse(mouseX, mouseY, 40, 40);
}
