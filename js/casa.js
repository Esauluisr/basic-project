
var sketchProc = function(processingInstance) {
  with(processingInstance){
    size(420,400);
    frameRate(65);
    draw =function(){
    background(19, 245, 245);

    fill(56, 8, 8);
    for (var x=60; x<311; x+=31){
        for (var y=147; y<370; y+=11){
            rect(x,y,30,10);
        }
    }

    fill(176, 210, 212);
    triangle(200, 28, 350, 150, 50, 150);

    fill(120, 80, 19);
    rect(180,280,40,77);
    pushStyle();
    stroke(0);strokeWeight(10);
    point(212,336);
    popStyle();
    fill(255, 204, 0);

    for(var x=80;x<300;x+=65){
        rect(x,170,50,50);
    }

    var pasto = getImage("cute/GrassBlock");
    var bus = getImage("cute/TreeShort");

    for (var i=0 ; i<400 ; i+=40){
        image(pasto,i,360,40,40);
        if( (i/40) % 3 === 0){
            image(bus,i,360,40,40);
        }
    }


    
  }
  }
};

  // Get the canvas that Processing-js will use
   var canvas = document.getElementById("mycanvas"); 
   // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
   var processing = new Processing(canvas, sketchProc); 