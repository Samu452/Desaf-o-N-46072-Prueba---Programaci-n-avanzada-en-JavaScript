import animal from "./Animal.js";
const AnimalSonido = document.getElementById("player")


class Leon extends animal {
    constructor(nombre, edad, img, comentario, sonido) {
        super(nombre, edad, img, comentario, sonido);
    }

    rugir() {
        AnimalSonido.src = `./assets/sounds/${this._sonido}.mp3`;
        AnimalSonido.play()
        return this._sonido;
    }
}

class Lobo extends animal {
  constructor(nombre, edad, img, comentario, sonido) {
    super(nombre, edad, img, comentario, sonido);
  }

  aullar() {
    AnimalSonido.src = `./assets/sounds/${this._sonido}.mp3`;
    AnimalSonido.play();
    return this._sonido;
  }
}

class Oso extends animal {
  constructor(nombre, edad, img, comentario, sonido) {
    super(nombre, edad, img, comentario, sonido);
  }

  gruñir() {
    AnimalSonido.src = `./assets/sounds/${this._sonido}.mp3`;
    AnimalSonido.play();
    return this._sonido;
  }
}

class Serpiente extends animal {
  constructor(nombre, edad, img, comentario, sonido) {
    super(nombre, edad, img, comentario, sonido);
  }

  sisear() {
    AnimalSonido.src = `./assets/sounds/${this._sonido}.mp3`;
    AnimalSonido.play();
    return this._sonido;
  }
}

class Aguila extends animal {
  constructor(nombre, edad, img, comentario, sonido) {
    super(nombre, edad, img, comentario, sonido);
  }

  chillar() {
    AnimalSonido.src = `./assets/sounds/${this._sonido}.mp3`;
    AnimalSonido.play();
    return this._sonido;
  }
}


export{Leon, Lobo, Oso, Serpiente, Aguila}