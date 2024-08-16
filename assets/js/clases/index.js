import { Aguila } from "./classes/Aguila.mjs";
import { Leon } from "./classes/Leon.mjs";
import { Lobo } from "./classes/Lobo.mjs";
import { Oso } from "./classes/Oso.mjs";
import { Serpiente } from "./classes/Serpiente.mjs";
import { iife as funcionAutoejecudable } from "./modulo/iife.mjs";

const instanciadorAnimales = { Aguila, Leon, Lobo, Oso, Serpiente }

document.getElementById('btnRegistrar').addEventListener('click', async () => {
  const nombre = document.getElementById('animal').value;
  const edad = document.getElementById('edad').value;
  const comentarios = document.getElementById('comentarios').value;
  //await esta esperando obtener la data
  const { imagen, sonido } = await funcionAutoejecudable.obtenerDataJson(nombre);
// si no se rellenan todos los campos alertar
  if (!nombre || !edad || !comentarios) {
    alert('Por favor, rellene todos los campos.');
    return;
  }
   // Creamos instancia de un animal
  let animal = new instanciadorAnimales[nombre](nombre, edad, imagen, comentarios, sonido);
   // Agregamos animal a lista de animales
  funcionAutoejecudable.addAnimal(animal)
   // Mostramos por consola
  funcionAutoejecudable.animalsArray
})


document.getElementById('animal').addEventListener("change", async (event) => {
  // event.target.value -> animal seleccionado
  const { imagen, sonido } = await funcionAutoejecudable.obtenerDataJson(event.target.value);
  const nombreAnimal = event.target.value;

  // imagen -> 'Aullido.jpg'
  const preview = document.getElementById('preview') // Seleccionamos contenedor imagen
  preview.innerHTML = ''; // limpiamos el contenedor
  const img = document.createElement('img'); // creamos elemento "en el aire"
  img.src = `assets/imgs/${imagen}`; // definimos atributo src de la imagen
  img.className = ("img-fluid rounded"); // definimos clases de bootstrap
  img.alt = nombreAnimal; // propiedad alt
  preview.appendChild(img); // recién añadimos la DOM
})
