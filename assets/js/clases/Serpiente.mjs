//modulo serpiente
import { Animal } from "./animal.mjs";

class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    //Serpiente exitende al animal
    super(nombre, edad, img, comentarios, sonido)
  }
//metodo siseo exclusivo de serpiente
  Siseo() {
    return 'SHHHHHH'
  }
}
export {Serpiente }