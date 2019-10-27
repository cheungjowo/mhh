//Original code from Felix Auer
//http://www.felixauer.com/javascript/difeqrk.html

export default function particlePlotter(p) {
  var blobs = [];
  var colors;
  let variation = 0;
  let xScale, yScale, centerX, centerY;

  //auto change
  let changeDuration = 3000;
  let lastChange = 0;

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.textAlign(p.CENTER, p.CENTER);

    xScale = p.width / 20;
    yScale = (p.height / 20) * (p.width / p.height);

    centerX = p.width / 2;
    centerY = p.height / 2;

    colors = [
      p.color('#581845'),
      p.color('#900C3F'),
      p.color('#C70039'),
      p.color('#FF5733'),
      p.color('#FFC30F')
    ];
  };

  p.draw = function() {
    /*
	//DEBUG
	textSize(20);
	noStroke();
	fill(255);
	ellipse(centerX, centerY, 60, 60);
	fill(0);
	text(variation, centerX, centerY-10);
	text(length, centerX, centerY+10);
	*/

    if (p.mouseIsPressed) {
      for (let i = 0; i < 20; i++) {
        let x = p.mouseX + p.random(-100, 100);
        let y = p.mouseY + p.random(-100, 100);
        var blob = {
          x: getXPos(x),
          y: getYPos(y),
          size: p.random(1, 5),
          lastX: x,
          lastY: y,
          color: colors[p.floor(p.random(colors.length))],
          direction: p.random(0.1, 1) * (p.random() > 0.5 ? 1 : -1)
        };
        blobs.push(blob);
      }
    }

    var length = blobs.length;
    if (length == 0) {
      p.background('#1a0633');
      p.noStroke();
      p.fill(255);
      p.textSize(40);
      p.text('Press to emmit particles', p.centerX, p.centerY);
      return;
    }

    p.noStroke();
    p.fill(26, 6, 51, 10);
    p.rect(0, 0, p.width, p.height);

    //auto change
    let time = p.millis();
    if (time - lastChange > changeDuration) {
      lastChange = time;
      variation++;
      if (variation > 11) variation = 0;
    }

    var stepsize = p.deltaTime * 0.002;
    for (var i = length - 1; i >= 0; i--) {
      let blob = blobs[i];

      var x = getSlopeX(blob.x, blob.y);
      var y = getSlopeY(blob.x, blob.y);
      blob.x += blob.direction * x * stepsize;
      blob.y += blob.direction * y * stepsize;

      x = getXPrint(blob.x);
      y = getYPrint(blob.y);
      p.stroke(blob.color);
      p.strokeWeight(blob.size);
      p.line(x, y, blob.lastX, blob.lastY);
      blob.lastX = x;
      blob.lastY = y;

      const border = 200;
      if (
        x < -border ||
        y < -border ||
        x > p.width + border ||
        y > p.height + border
      ) {
        blobs.splice(i, 1);
      }
    }
  };

  function getSlopeY(x, y) {
    switch (variation) {
      case 0:
        return Math.sin(x);
      case 1:
        return Math.sin(x * 5) * y * 0.3;
      case 2:
        return Math.cos(x * y);
      case 3:
        return Math.sin(x) * Math.cos(y);
      case 4:
        return Math.cos(x) * y * y;
      case 5:
        return Math.log(Math.abs(x)) * Math.log(Math.abs(y));
      case 6:
        return Math.tan(x) * Math.cos(y);
      case 7:
        return -Math.sin(x * 0.1) * 3; //orbit
      case 8:
        return (x - x * x * x) * 0.01; //two orbits
      case 9:
        return -Math.sin(x);
      case 10:
        return -y - Math.sin(1.5 * x) + 0.7;
      case 11:
        return Math.sin(x) * Math.cos(y);
    }
  }

  function getSlopeX(x, y) {
    switch (variation) {
      case 0:
        return Math.cos(y);
      case 1:
        return Math.cos(y * 5) * x * 0.3;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return 1;
      case 7:
        return Math.sin(y * 0.1) * 3; //orbit
      case 8:
        return y / 3; //two orbits
      case 9:
        return -y;
      case 10:
        return -1.5 * y;
      case 11:
        return Math.sin(y) * Math.cos(x);
    }
  }

  function getXPos(x) {
    return (x - centerX) / xScale;
  }
  function getYPos(y) {
    return (y - centerY) / yScale;
  }

  function getXPrint(x) {
    return xScale * x + centerX;
  }
  function getYPrint(y) {
    return yScale * y + centerY;
  }
}
