//Definición clase animal
class Animal {
  #nombre;
  #edad;
  #img;
  #comentarios;
  #sonido;
  //constructor
  constructor(nombre, edad, img, comentarios, sonido) {
      this.#nombre = nombre;
      this.#edad = edad;
      this.#img = img;
      this.#comentarios = comentarios;
      this.#sonido = sonido;
  }
  // Getters
  get Nombre() {
      return this.#nombre;
  }
  get Edad() {
      return this.#edad;
  }
  get Img() {
      return this.#img;
  }
  get Sonido() {
      return this.#sonido;
  }
  // Setters
  set Comentarios(comentarios) {
      this.#comentarios = comentarios;
  }
}

//export
export {Animal}