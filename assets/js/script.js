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
        this._id = id
    }
    playMultimedia() {
        (() => {
            const iframe = document.querySelector(this._id)
            iframe.setAttribute("src", this.url)
        })()
    }
    setInicio(time) {
        this._url += `?start=${time}`
    }
}
const headingMusica = document.querySelector("#headingMusica")
const headingPelicula = document.querySelector("#headingPeliculas")
const headingSerie = document.querySelector("#headingSeries")

const playerMusica = new Reproductor("https://www.youtube.com/embed/DZNv74aIGkU", "#musica")
headingMusica.addEventListener("click", () => {
    playerMusica.playMultimedia()
} )
playerMusica.setInicio(15)

const playerPelicula = new Reproductor("https://www.youtube.com/embed/-k-GZYEwK14", "#peliculas")
headingPelicula.addEventListener("click", () => {
    playerPelicula.playMultimedia()
})
playerPelicula.setInicio(239)

const playerSerie = new Reproductor("https://www.youtube.com/embed/tofYi_SrZQ8", "#series")
headingSerie.addEventListener("click", () => {
    playerSerie.playMultimedia()
})
playerSerie.setInicio()

// musica src="https://www.youtube.com/embed/DZNv74aIGkU"
// pelicula src="https://www.youtube.com/embed/-k-GZYEwK14"
// serie src="https://www.youtube.com/embed/tofYi_SrZQ8"
