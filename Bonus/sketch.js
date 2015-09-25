// noLoop();
function setup() {
	// create a place to draw
	createCanvas(640, 480);
	noStroke();
}

function draw() {
	background(0, 0, 0);

colorMode(HSB);
	for (var y = 0; y < 10; y++) {
		if ( y === mouseY * 64){
					fill(351.5, 95.45, random(0, 100));
				} else {
					fill(204, 0, random(0, 60));
				}
		for (var x = 0; x < 10; x++) {
			if ( x === mouseX * 64){
						fill(351.5, 95.45, random(0, 100));
					} else {
						fill(204, 0, random(0, 60));
					}
			rect(x * 64, y * 64, 64, 64);
			// draw rectangle
			fill(351.5, 95.45, random(0, 100));

			rect(x * 64 , mouseY , 64, 64);
			rect(mouseX, y * 64, 64, 64);
			}
	}
}