var c1 = document.getElementById("can1");
var img;

var thickness = 50;


function loadImageOnCanvas() {
  var imgIp = document.getElementById("imgIn");
  
  img = new SimpleImage(imgIp);
  
  img.drawTo(c1);
}

function invert() {
  for (var pixel of img.values()) {
    pixel.setRed(255 - pixel.getRed());
    pixel.setGreen(255 - pixel.getGreen());
    pixel.setBlue(255 - pixel.getBlue());
  }
  
  img.drawTo(c1);
}