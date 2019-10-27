export default function sketch1(p) {
  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0, 0, 0);
  };

  p.draw = function() {
    if (p.mouseIsPressed) {
      p.stroke(0);
      p.strokeWeight(40);
      p.line(p.mouseX, 0, p.mouseX, p.height);
    } else {
      p.stroke(
        255 - p.random(0, 255),
        0 + p.random(0, 255),
        0 + p.random(0, 255)
      );
      p.strokeWeight(1);
      p.line(p.mouseX, 0, p.mouseY, p.height);
    }
  };
}
