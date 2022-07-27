function setup() {
    let myCanvas=createCanvas(1000, 1070);
    myCanvas.position(100, 100, 'fixed');
    portrait= loadImage('me.png');
    portraitSad = loadImage('me2.png');
  
  }
  
  function draw() {
    background(220);
    if(mouseX > 300, mouseY > 300) {
      image(portraitSad, 0, 0);
    }else{
      image(portrait, 0, 0);
    }
    
  }