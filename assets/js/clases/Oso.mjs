//modulo oso
import { Animal } from "./animal.mjs";

class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    //Oso exitende al animal
    super(nombre, edad, img, comentarios, sonido)
  }
//metodo gruñido exclusivo de oso
  Gruñido() {
    return 'Grrrr'
  }

  
}
export {Oso }