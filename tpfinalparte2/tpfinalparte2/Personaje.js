class Personaje {
  constructor() {
    this.posX = 300;
    this.posY = 300;
    this.miColor = color(255, 0, 175);
    this.vida = 3;
    this.moviendoseArriba = false;
  }
  dibujar() {
    fill(this.miColor);
    rect(this.posX, this.posY, 50, 50);
    this.mover();
  }
  mover() {

    if (this.moviendoseArriba == true) {
      this.posY -= 52;
      if (this.posY <= 240) {
        this.moviendoseArriba = false;
      }
    } else {
      if (this.posY < 300) {
        this.posY += 5;
      }
    }
  }
   matar(){
    this.vida -= 1;
  }
  haTocadoLaBala(bala) {
    if (dist(this.posX, this.posY, bala.posX, bala.posY) < 15) {
      this.matar();
    }
    teclaPresionada(key) {

      if (key === ' ') {
        this.moviendoseArriba = true;
      }
    }
  }
