class Enemigo {
  constructor() {
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(255, 0, 0);
    this.bala = new Bala();
  }
  dibujar() {
    fill(this.miColor);
    ellipse(this.posX, this.posY, 30, 30);
  }
  dispararBala() {
    this.bala = new Bala(this.posX, this.posY);
    this.bala.disparar();
  }
}
