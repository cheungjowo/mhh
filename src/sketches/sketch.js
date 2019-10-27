export default function sketch(p) {
  var particles_a = [];
  var particles_b = [];
  var particles_c = [];
  var nums = 200;
  var noiseScale = 800;

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(21, 8, 50);
    for (var i = 0; i < nums; i++) {
      particles_a[i] = new Particle(
        p.random(0, p.width),
        p.random(0, p.height)
      );
      particles_b[i] = new Particle(
        p.random(0, p.width),
        p.random(0, p.height)
      );
      particles_c[i] = new Particle(
        p.random(0, p.width),
        p.random(0, p.height)
      );
    }
  };

  p.draw = function() {
    p.noStroke();
    p.smooth();
    for (var i = 0; i < nums; i++) {
      var radius = p.map(i, 0, nums, 1, 2);
      var alpha = p.map(i, 0, nums, 0, 250);
      p.fill(69, 33, 124, alpha);
      particles_a[i].move();
      particles_a[i].display(radius);
      particles_a[i].checkEdge();
      p.fill(7, 153, 242, alpha);
      particles_b[i].move();
      particles_b[i].display(radius);
      particles_b[i].checkEdge();
      p.fill(255, 255, 255, alpha);
      particles_c[i].move();
      particles_c[i].display(radius);
      particles_c[i].checkEdge();
    }
  };

  function Particle(x, y) {
    this.dir = p.createVector(0, 0);
    this.vel = p.createVector(0, 0);
    this.pos = p.createVector(x, y);
    this.speed = 0.4;

    this.move = function() {
      var angle =
        p.noise(this.pos.x / noiseScale, this.pos.y / noiseScale) *
        p.TWO_PI *
        noiseScale;
      this.dir.x = p.cos(angle);
      this.dir.y = p.sin(angle);
      this.vel = this.dir.copy();
      this.vel.mult(this.speed);
      this.pos.add(this.vel);
    };

    this.checkEdge = function() {
      if (
        this.pos.x > p.width ||
        this.pos.x < 0 ||
        this.pos.y > p.height ||
        this.pos.y < 0
      ) {
        this.pos.x = p.random(50, p.width);
        this.pos.y = p.random(50, p.height);
      }
    };

    this.display = function(r) {
      p.ellipse(this.pos.x, this.pos.y, r, r);
    };
  }
}
