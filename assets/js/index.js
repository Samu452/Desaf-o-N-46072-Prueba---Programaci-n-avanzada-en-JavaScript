import { Leon, Lobo, Oso, Serpiente, Aguila } from "../module/hijas.js";

let animales;

const getAnimales = async () => {
  const request = await fetch("animales.json");
  const { animales: fetchedAnimales } = await request.json();
  animales = fetchedAnimales;
};

getAnimales();

const animalInput = document.getElementById("animal");
const edadInput = document.getElementById("edad");
const comentarioInput = document.getElementById("comentarios");
const btnRegistrar = document.getElementById("btnRegistrar");
const preview = document.getElementById("preview");

const obtenerExtension = (nombre) => {
  let extension = "jpg";
  if (nombre.includes("png")) {
    extension = "png";
  }
  return extension;
};

animalInput.addEventListener("change", () => {
  const selectAnimal = animalInput.value;
  const { imagen: imagenAnimal } =
    animales.find(({ name }) => name === selectAnimal) || {};
  preview.style.backgroundImage = `url("./assets/imgs/${imagenAnimal}")`;
});

btnRegistrar.addEventListener("click", () => {
  const nombre = animalInput.value;
  const edad = edadInput.value;
  const extension = obtenerExtension(nombre);
  const img = `./assets/imgs/${nombre}.${extension}`;
  const comentario = comentarioInput.value;
  const selectAnimal = animalInput.value;

  const imagenResult = animales.find(({ name }) => name === selectAnimal) || {};
  const sonido = `./assets/sounds/${imagenResult.sonido}`;

  if (!nombre || !edad || !comentario) {
    alert("Por favor, complete todos los campos");
    return;
  }

  let nuevoAnimal;

  switch (selectAnimal) {
    case "Leon":
      nuevoAnimal = new Leon(nombre, edad, img, comentario, sonido);
      break;
    case "Lobo":
      nuevoAnimal = new Lobo(nombre, edad, img, comentario, sonido);
      break;
    case "Oso":
      nuevoAnimal = new Oso(nombre, edad, img, comentario, sonido);
      break;
    case "Serpiente":
      nuevoAnimal = new Serpiente(nombre, edad, img, comentario, sonido);
      break;
    case "Aguila":
      nuevoAnimal = new Aguila(nombre, edad, img, comentario, sonido);
      break;
    default:
      console.error("Animal no reconocido");
      return;
  }

  animales.push(nuevoAnimal);

  const animalesHTML = document.getElementById("Animales");
  animalesHTML.innerHTML += `
    <div class="px-3 pb-2">
      <div class="card w-50 m-auto bg-dark text-white border-0">
        <img src="${nuevoAnimal._img}" class="d-block m-auto w-100" />
        <div class="card-body text-center">
          <h6 class="card-text">${nuevoAnimal._edad}</h6>
          <h6 class="card-text m-0">Comentarios</h6>
          <hr />
          <p>${nuevoAnimal._comentario}</p>
          <audio controls>
            <source src="${nuevoAnimal._sonido}" type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  `;
});
