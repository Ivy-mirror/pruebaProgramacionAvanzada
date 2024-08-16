//modulo lobo
import { Animal } from "./animal.mjs";

class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    //lobo exitende al animal
    super(nombre, edad, img, comentarios, sonido)
  }
//metodo aullar exclusivo de Lobo
  Aullar() {
    return 'AUUUU'
  }
}
export {Lobo }