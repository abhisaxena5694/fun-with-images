
var c1 = document.getElementById("can1");

var img;
function loadImageOnCanvas() {
  var imgIp = document.getElementById("imgIn");
  img = new SimpleImage(imgIp);
  
  var c1 = document.getElementById("can1");
  
  img.drawTo(c1);
}

function rainbowIt() {
  for (var pixel of img.values()) {
    var x = pixel.getX();
    var w = img.getWidth();
    if (x < (w/7) * 1) { 
      // Violet
      pixel.setRed(255);
      pixel.setBlue(255);
    }
    else if (x < (w/7) * 2) {
      // Indigo
      pixel.setRed(75);
      pixel.setBlue(130);
    }
    else if (x < (w/7) * 3) {
      // Blue
      pixel.setBlue(255);
    }
    else if (x < (w/7) * 4) {
      // Green
      pixel.setGreen(255);
    }
    else if (x < (w/7) * 5) {
      // Yellow
      pixel.setRed(255);
      pixel.setGreen(255);
    }
    else if (x < (w/7) * 6) {
      // Orange
      pixel.setRed(255);
      pixel.setGreen(165);
    }
    else {
      // Red
      pixel.setRed(255);
    }
  }
  
  img.drawTo(c1);
  
}