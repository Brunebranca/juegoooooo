class Juego {
  constructor() {
    this.cantidadBala = cantidadBala;
    this.crearPersonaje();
    //this.crearEnemigos();
  }
  dibujar() {
    this.personaje.dibujar();
  }

  iniciar() {
  }

  crearPersonaje() {
    this.personaje = new Personaje();
  }
  teclaPresionada(key) {
    this.personaje.teclaPresionada(key);
  }
  crearBala() {
    this.bala = [];
    for (let i=0; i < this.cantidadBala; i++) {
      this.bala[i] = new Bala(i*40, 100);
    }
  }
   controlarDisparosAEnemigos(){
    if(this.personaje.haDisparadoBala()){
      for(let i=0; i < this.cantidadEnemigos;i++){
        this.enemigos[i].haTocadoLaBala(this.personaje.bala);
      }
    }
  }
}
