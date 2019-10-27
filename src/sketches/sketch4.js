export default function sketch4(p) {
  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
  };

  p.draw = function() {
    if (p.mouseIsPressed) {
      p.frameRate(60);
      p.stroke(255);
      p.fill(255);
      p.ellipse(p.mouseX, p.mouseY, 100, 100);
    } else {
      p.frameRate(10);
      p.stroke(0);
      p.fill(p.random(255), p.random(255), p.random(255));
      p.ellipse(p.mouseX, p.mouseY, 80, 80);
    }
  };
}
