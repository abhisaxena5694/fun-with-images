var c1 = document.getElementById("can1");
var img;

var thickness = 50;


function loadImageOnCanvas() {
  var imgIp = document.getElementById("imgIn");
  
  img = new SimpleImage(imgIp);
  
  img.drawTo(c1);
}


function setBlack(pixel) {
    pixel.setRed(0);
    pixel.setBlue(0);
    pixel.setGreen(0);
    //return pixel;
}

function addBorder() {
    var w = img.getWidth();
    var h = img.getHeight();
    
    for (var pixel of img.values()) {
        var x = pixel.getX();
        var y = pixel.getY();
        
        if ((x <= thickness || y <= thickness) || (x > (w - thickness) || y > (h - thickness))) {
            setBlack(pixel);
        }
    }
  
  img.drawTo(c1);
}