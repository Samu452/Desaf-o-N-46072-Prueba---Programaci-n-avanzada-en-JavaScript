class Animal { 
    constructor(nombre, edad, img, comentario, sonido) {
       this._nombre = nombre;
       this._edad = edad;
       this._img = img;
       this._comentario = comentario;
       this._sonido = sonido;
    }
    get nombre(){
        return this._nombre;
    }
    get edad(){
        return this._edad;
    }
    get img(){
        return this._img;
    }
    get comentario(){
        return this._comentario;
    }
    set comentario(Newcomment){
        return this._comentario=Newcomment;
    }
    get sonido(){
        return this._sonido;
    }

}

export default Animal