export default function sketch2(p) {
  var dim;

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    dim = p.width + 200;
    p.background(255);
    p.colorMode(p.HSB, 360, 100, 100);
    p.noStroke();
    p.ellipseMode(p.RADIUS);
    p.frameRate(1);
  };
  p.draw = function() {
    p.background(255);
    drawGradient(p.width / 2, p.height / 2);
  };

  function drawGradient(x, y) {
    var radius = dim;
    var h = p.random(0, 360);
    if (p.mouseIsPressed) {
      for (var r = p.radius; r > 0; --r) {
        //small for blur or big for sharp
        p.fill(h, 40, 100);
        p.ellipse(x, y, r, r);
        h = (h + 0.3) % 360;
      }
    } else {
      for (var r = radius; r > 0; --r) {
        //small for blur or big for sharp
        p.fill(h, 100, 100);
        p.ellipse(x, y, r, r);
        h = (h + 0.3) % 360;
      }
    }
  }
}
