class Bala {
  constructor() {
    this.posX = posX;
    this.posY = posY;
    this.disparada = false;
  }
  dibujar() {
    if (this.disparada) {
      fill(0);
      ellipse(this.posX, this.posY, 8, 8);
      this.mover();
    }
  }
  mover() {
    this.posY-=5;
  }
  disparar(){
    this.disparada = true;
  }
}
