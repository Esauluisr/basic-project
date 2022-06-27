
var sketchProc = function(processingInstance) {
  with(processingInstance){
    size(460,430);
    frameRate(65);
    draw =function(){
    background(255, 0, 0);
    fill(13, 13, 12);
    textSize(30);
    text("PAPAS FRITAS GRATIS!", 34, 38);
    fill(0, 255, 38);
    textSize(30);
    text("SOLO HOY!", 137, 87);
    textSize(15);
    fill(221, 250, 5);
    text("OFERTA DISTONIBLE EN MCDONALD¨S", 65, 250);
    fill(0, 217, 255);
    textSize(17);
    text("TE ACOMPAÑA EN CADA MOMENTO", 62, 300);
    fill(255, 217, 0);
    textSize(108);
    text("M", 169, 199);
    fill(209, 235, 9);
    textSize(12);
    text("MCDONALD¨S", 173, 209);
    
  }
  }
};

  // Get the canvas that Processing-js will use
   var canvas = document.getElementById("mycanvas"); 
   // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
   var processing = new Processing(canvas, sketchProc); 