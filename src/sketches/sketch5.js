export default function sketch5(p) {
  var dim;
  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    dim = p.width;
    p.background(0);
    p.colorMode(p.HSB, 360, 100, 100);

    p.ellipseMode(p.RADIUS);
  };
  p.draw = function() {
    p.background(255);
    drawGradient(p.width / 2, p.height / 2);
  };

  function drawGradient(x, y) {
    var radius = dim;
    var h = p.random(0, 360);
    p.stroke(100);
    if (p.mouseIsPressed) {
      for (var r = radius; r > 0; --r) {
        p.frameRate(1.5);
        p.fill(h, p.random(0, 100), p.random(0, 100));
        p.ellipse(p.random(0, 500), p.random(0, 100), r, r);
        p.ellipse(p.random(0, 500), p.random(0, 500), r + 100, r + 100);
        p.ellipse(p.random(0, 500), p.random(0, 500), r + 100, r + 100);
        h = (h + p.PI / 10) % 360;
      }
    } else {
      for (var r = radius; r > 0; --r) {
        //small for blur or big for sharp
        p.frameRate(1);
        p.fill(h, p.random(0, 100), p.random(0, 200));
        p.ellipse(p.random(0, 500), p.random(0, 500), r, r);
        p.ellipse(p.random(0, 500), p.random(0, 500), r - 10, r - 10);
        p.ellipse(p.random(0, 500), p.random(0, 500), r + 10, r + 10);

        h = (h + p.PI / 10) % 360;
      }
    }
  }
}
