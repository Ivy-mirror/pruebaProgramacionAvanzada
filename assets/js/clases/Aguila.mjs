//modulo aguila
import { Animal } from "./animal.mjs";

class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    //Aguila exitende al animal
    super(nombre, edad, img, comentarios, sonido)
  }
//metodo chillar exclusivo de aguila
  Chillar() {
    return 'Aaaaaaah'
  }

  
}
export {Aguila }