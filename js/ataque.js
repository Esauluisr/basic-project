var bodyX = 193;
var bodyY = 195;
var bodyW = 139;
var faceW = bodyW/-1;

var sketchProc = function(processingInstance) {
  with(processingInstance){
    size(460,430);
    frameRate(65);
    draw =function(){
    background(0, 239, 252);
    fill(36, 100, 62);
    //pasto 
    rect(bodyX-215, bodyY+22, bodyW+351, 223); 
    fill(240, 209, 36);
    ellipse(bodyX, bodyY-94, faceW, 109); 
    fill(240, 36, 36);
    ellipse(bodyX, bodyY, faceW, 111); 
    fill(240, 36, 233);
    ellipse(bodyX, bodyY+89, faceW, 107); 
    fill(36, 240, 206);
    ellipse(bodyX, bodyY+160, faceW, 76); 
    noFill();
    //antenas y boca
    arc(bodyX-74,bodyY-141,103, faceW+215,240,300);
    arc(bodyX-25,bodyY-131,111, faceW+254,239,360);
    arc(bodyX-11,bodyY-83,49, faceW+114,239,360);
    fill(0,0,0);
    //ojos
    ellipse(164,88,44,44); 
    ellipse(232,88,44,40);
    fill(0,0.0);
    fill(238, 255, 0);
    // sol
    ellipse(44,51,62,65);
    
  }
  }
};

  // Get the canvas that Processing-js will use
   var canvas = document.getElementById("mycanvas"); 
   // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
   var processing = new Processing(canvas, sketchProc); 