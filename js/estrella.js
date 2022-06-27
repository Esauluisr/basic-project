var xPos = 50;
var yPos = 20;
var a = 300;
var b = 100;


var sketchProc = function(processingInstance) {
  with(processingInstance){
    size(460,430);
    frameRate(65);
    draw =function(){
        background(29, 40, 115);
    fill(255, 242, 0);
    
    ellipse(xPos, yPos, 12, 12);
    //bgStar
    ellipse(a,b,10,10);
    ellipse(10,150,7,7);
    fill(255,234,0);
    ellipse(300,190,8,8);
    fill(255,234,0);
    ellipse(10,300,8,8);
    fill(255,234,0);
    ellipse(30,10,8,8);
    fill(255,234,0);
    ellipse(388,360,8,8);
    fill(255,234,0);
    ellipse(355,10,8,8);
    fill(255,234,0);
    ellipse(200,340,8,8);
    fill(255,234,0);
    ellipse(200,50,8,8);
    fill(255,234,0);
    
    a=a-2;
    b=b+1;
    xPos=xPos+3;
    yPos=yPos+1;
    
    }
}
};



  // Get the canvas that Processing-js will use
   var canvas = document.getElementById("mycanvas"); 
   // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
   var processing = new Processing(canvas, sketchProc); 