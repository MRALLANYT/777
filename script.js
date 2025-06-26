 //.then(res => res.json()) //convertir la promesa en json
     //.then(data => console.log(data)); //mostrar la data en consola
    //fetch("https://rickandmortyapi.com/api/character") //promesa

document.addEventListener('DOMContentLoaded', function() {
function markeCard(carta){
    const{name,image,species,gender} = carta 
    
    const titulo = document.createElement("h4")//creacion
    titulo.textContent = name //manipulacion
    titulo.classList.add("titulo");// añadir clase, estilos

    const especie = document.createElement("h5")
    especie.textContent= species 
    especie.classList.add("especie");

    const genero = document.createElement("h5")
    genero.textContent= gender
    genero.classList.add("genero");

    const img = document.createElement ("img")
    img.src = image 
    img.classList.add("img");



   const Card = document.createElement("div")
   Card.classList.add("card"); // Crea un <div> que será la carta

Card.appendChild(img)  // Agrega una imagen dentro de la carta
Card.appendChild(titulo)  // Agrega un título (por ejemplo, el nombre del personaje)
Card.appendChild(especie) // Agrega un párrafo o texto con la especie
Card.appendChild(genero)  // Agrega un párrafo o texto con el género 


const padre = document.querySelector('.container')
padre.appendChild(Card)
}
    async function obtenerdatos() {
        const respuesta = await fetch("https://rickandmortyapi.com/api/character");
        const {results} = await respuesta.json() //destructurar el api para mostrar lo q nos interesa y se convierte en json
        for (let i = 0 ; i < results.length; i++){
            markeCard(results[i])
        }
    }
        obtenerdatos()
});