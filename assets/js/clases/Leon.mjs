//modulo leon
import { Animal } from "./animal.mjs";

class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    //leon exitende al animal
    super(nombre, edad, img, comentarios, sonido)
  }
//metodo rugir exclusivo de leon
  Rugir() {
    return 'Rugido'
  }
}
export {Leon}