

var sketchProc = function(processingInstance) {
  with(processingInstance){
    size(460,430);
    frameRate(65);
    draw =function(){
    background(186, 145, 20); // wooden table
    // plate
    ellipse(200, 200, 350, 350); 
    ellipse(200, 200, 300, 300); 
    noStroke();
    //pizza
    fill(247,199,126);
    triangle(112,110,257,175,101,230);

    fill(212,167,70);
    rect(92,106,23,123);

    fill(255,0,0);
    ellipse(147,157,50,50);
    ellipse(192,179,25,25);
    ellipse(139,200,25,25);

    //galleta
    strokeWeight(5);
    fill(255, 209, 71);
    ellipse(300,219,67,65);
    stroke(13, 13, 12);
    ellipse(287,213,4,5);
    ellipse(309,211,4,5);
    ellipse(309,230,5,5);
    ellipse(292,231,5,5);

    //manzana
    noStroke();
    fill(255, 0, 0);
    ellipse(212,279,100,100);
    fill(245, 233, 233);
    ellipse(229,251,15,17);
    fill(5, 150, 23);
    ellipse(170,233,42,8);
    stroke(89, 27, 5);
    line(192,239,177,209);
    line(192,239,177,209);
    line(192,239,177,209);

    //papas
    stroke(255,207, 87);
    strokeWeight(11);
    line(300,150,230,63);
    line(300,150,230,97);
    line(269,155,260,68);
    line(269,155,260,73);
    line(282,155,243,73);
    line(243,152,296,92);

    
  }
  }
};

  // Get the canvas that Processing-js will use
   var canvas = document.getElementById("mycanvas"); 
   // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
   var processing = new Processing(canvas, sketchProc); 