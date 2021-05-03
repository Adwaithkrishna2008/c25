class Bird extends BaseClass{
    constructor(x,y,width,height){

      super(x,y,width,height);
      this.img=loadImage("sprites/bird.png");
    }
    display()
    {
      this.body.position.x=mouseX;
      this.body.position.y=mouseY;
      super.display();
    }
  }
  
  