"use strict"

class Multimedia {
    constructor(url) {
        this._url = url
    }
    get url() {
        return this._url
    }
    setInicio() { 
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url)
        this.id = id
    }
    playMultimedia() {
        (function () {
            videoMusica.setAttribute("src", this.url)
        })()
    }
    setInicio(time) {
        this.url += `?start=${time}`
    }
}
const clickMusica = document.querySelector("#headingMusica")
const clickPelicula = document.querySelector("#headingPeliculas")
const clickSerie = document.querySelector("#headingSeries")
const idMusica = document.querySelector("#musica")
const idPelicula = document.querySelector("#peliculas")
const idSerie = document.querySelector("#series")

clickMusica.addEventListener("click", () => {
    
} )
const musica = new Reproductor("https://www.youtube.com/embed/UqFwG08pQA4", idMusica)
const pelicula = new Reproductor()
const serie = new Reproductor()


// musica src="https://www.youtube.com/embed/UqFwG08pQA4"
// pelicula src="https://www.youtube.com/embed/tofYi_SrZQ8"
// serie src="https://www.youtube.com/embed/tofYi_SrZQ8"
