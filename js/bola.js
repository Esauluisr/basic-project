
var sketchProc = function(processingInstance) {
  with(processingInstance){
    size(420,400);
    frameRate(65);
    draw =function(){
    fill(0, 0, 0);
    ellipse(200, 200, 375, 375);
    fill(60, 0, 255);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    var answer = floor(random(1, 5));

    if (answer === 1) {
        fill(60, 0, 255);
        triangle(200,104,280,280,120,280);
        fill(255,255,255);
        text("Implemantado", 159, 229); 
    }
    else if(answer === 2){
        fill(56, 194, 21);
        triangle(200,104,280,280,120,280);
        fill(255,255,255);
        text("usted esta en la escuela",176,200);
    }

    else if(answer === 3){
        fill(219, 66, 28);
        triangle(200,104,280,280,120,280);
        fill(255,255,255);
        text("Cua es tu pregunta? ",176,200);
    }
    else if(answer === 4){ 
        fill(191, 43, 240);
        triangle(200,104,280,280,120,280);
        fill(255,255,255);
        text("Definitivamnete",176,200);
    }
     
    
  }
  }
};

  // Get the canvas that Processing-js will use
   var canvas = document.getElementById("mycanvas"); 
   // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
   var processing = new Processing(canvas, sketchProc); 