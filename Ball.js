class Ball extends BaseClass {
  constructor(x,y){
    super(x,y,30,30);
    this.image = loadImage("Images/snowball.png");
  }

  display() {
    super.display();
  }
}
