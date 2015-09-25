function setup() {
	// create a place to draw
	createCanvas(640, 480);
	noStroke();
	smooth();
	// noLoop();
xpos = mouseX;
ypos = mouseY;
}

function draw() {
	// clear the background
	background(0, 0, 0);
	xpos += (mouseX - xpos)/20;
	ypos += (mouseY - ypos)/20;
	//xpos = xpos + (mouseX - xpos)/5.0;
	//ypos = ypos + (mouseY - ypos)/5.0;
	// set a fill color
	fill(255, 255, 255);

	var x = random(-5, 5);
			ellipse(xpos + x, ypos + x, 50, 50);
}
