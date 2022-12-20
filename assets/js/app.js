console.log("Rick y Morty API");

const items = document.getElementById('items');
const template = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
    const random = getRandomInt(1,42);
    fetchData(random);
})

const getRandomInt = (min,max) =>{
    return Math.floor(Math.random() * (max-min) + min);
}

const fetchData = async (id) =>{
    try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${id}`);
        const data = await res.json();
        
        pintarCards(data);

    } catch (error) {
        console.log(error);
    }
}

const pintarCards = data => {
        Object.values(data.results).forEach((personaje) => {
          console.log(personaje)
          template.querySelector(".card-body-img").setAttribute("src", personaje.image);
          template.querySelector(".nombre").textContent = personaje.name ;
          template.querySelector(".estado").textContent = personaje.status +" " + "-";
          template.querySelector(".especie").textContent = personaje.species;
          template.querySelector(".genero").textContent = personaje.gender;
          template.querySelector(".ubicacion").textContent = personaje.location.name;
          template.querySelector(".origen").textContent = personaje.origin.name;
      
          const clone = template.cloneNode(true)
          fragment.appendChild(clone)
        })
      
        items.appendChild(fragment)
        console.log(items);
}

