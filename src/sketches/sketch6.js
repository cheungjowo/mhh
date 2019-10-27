export default function sketch6(p) {
  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(244, 248, 252);
  };

  p.draw = function() {
    if (p.mouseIsPressed) {
      p.line(p.mouseX, 0, p.mouseY, p.height);
    } else {
      p.line(p.mouseX, 0, p.mouseX, p.height);
    }
  };
}
