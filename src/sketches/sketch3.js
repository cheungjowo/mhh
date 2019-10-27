export default function sketch3(p) {
  var dim;

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    dim = p.width;
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
      for (var r = radius; r > 0; --r) {
        //small for blur or big for sharp
        p.fill(h, 50, 150);
        p.ellipse(x, y, r, r);
        p.ellipse(x - 100, y, r - 10, r - 10);
        p.ellipse(x + 100, y, r + 10, r + 10);
        h = (h + p.PI / 10) % 360;
      }
    } else {
      for (var r = radius; r > 0; --r) {
        //small for blur or big for sharp
        p.fill(h, 100, 100);
        p.ellipse(x, y, r, r);
        p.ellipse(x - 100, y, r - 10, r - 10);
        p.ellipse(x + 100, y, r + 10, r + 10);
        h = (h + p.PI / 10) % 360;
      }
    }
  }
}
