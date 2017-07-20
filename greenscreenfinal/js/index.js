var fgImage;
var bgImage;
var output;


function loadForegroundImage() {
  var fgImEl = document.getElementById("fgin");
  fgImage = new SimpleImage(fgImEl);
  
  var c1 = document.getElementById("can1");
  fgImage.drawTo(c1);
}

function loadBackgroundImage() {
  var bgImEl = document.getElementById("bgin");
  bgImage = new SimpleImage(bgImEl);
  
  var c2 = document.getElementById("can2");
  bgImage.drawTo(c2);
}

function doGreenScreen() {
  output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());
  
  var threshold = 255;
 
  for (var pixel of fgImage.values()) {
    posX = pixel.getX();
    posY = pixel.getY();
    var opPixel;
    if (pixel.getGreen() == threshold) {
        opPixel = bgImage.getPixel(posX, posY);
        
    } 
    else {
        opPixel = fgImage.getPixel(posX, posY);
    }
    output.setPixel(posX,posY,opPixel);
  }
  
  var c1 = document.getElementById("can1");
  output.drawTo(c1);
  
  var c2 = document.getElementById("can2");
  var ctx2 = c2.getContext("2d");
  
  ctx2.clearRect(0,0,fgImage.getWidth(), fgImage.getHeight());
}

function clearCanvas() {
  var c1 = document.getElementById("can1");
  var ctx1 = c1.getContext("2d");
  
  ctx1.clearRect(0,0,fgImage.getWidth(), fgImage.getHeight());
  
  var c2 = document.getElementById("can2");
  var ctx2 = c2.getContext("2d");
  
  ctx2.clearRect(0,0,bgImage.getWidth(), bgImage.getHeight());
}