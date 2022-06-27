
var sketchProc = function(processingInstance) {
  with(processingInstance){
    size(400,420);
    frameRate(65);
    draw =function(){
    background(89, 216, 255);
    fill(181, 162, 65);
    noStroke();
    rect(0,360,400,64);

    noStroke();
    fill(150 , 141, 41);
    arc(150,361,75,50,180,360);
    arc(320,361,74,50,180,360);

    var centerX = 0;
    var centerY = 0;
    var bodyLength = 0;
    var bodyHeight = 0;
    var bodyColor = color(162, 0, 255);
    var tailWidth = 0;
    var tailHeight = 0;
    var eyeSize = 0;
    var eyecolor = color(255, 0, 0);

    var drawFish = function(centerX, centerY, bodyLength,bodyHeight,tailWidth,tailHeight,eyeSize,eyecolor,bodyColor){
    
    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    var tailWidth = bodyLength/4;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
        centerX-bodyLength/2-tailWidth, centerY-tailHeight,
        centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(209, 71, 61);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};

drawFish(100,77,77,87,99,81,36,color(47, 36, 199),color(109, 30, 166));
drawFish(300,50,75,35,33,20,77,color(9, 102, 23),color(166, 148, 31));
drawFish(300,141,112,89,20,35,20,color(181, 230, 18),color(31, 166, 40));
drawFish(119,199,80,58,66,30,32,color(237, 219, 19),color(166, 67, 31));
drawFish(276,281,81,99,20,30,35,color(227, 18, 227),color(166, 31, 166));
drawFish(117,310,102,50,20,30,35,color(0, 0, 0),color(157, 166, 31));

    
  }
  }
};

  // Get the canvas that Processing-js will use
   var canvas = document.getElementById("mycanvas"); 
   // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
   var processing = new Processing(canvas, sketchProc); 