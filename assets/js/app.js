console.log("Rick y Morty API");

document.addEventListener('DOMContentLoaded', () => {
    const random = getRandomInt(1, 20);
    fetchData(random);
})

const getRandomInt = (min, max) => {
    return Math.floor(Math.random()*(max - min)) + min;
}
const fetchData = async (id) =>{
    try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await res.json();

        console.log(data);

        const api = {
            img : data.image,
            nombre : data.name,
            estado : data.status,
            especie : data.species,
            genero: data.gender,
            ubicacion: data.location.name,
            origen: data.origin.name
        }
        
        pintarCard(api);
    } catch (error) {
        console.log(error);
    }
}

const pintarCard = (api) => {
    //console.log(pokemon);
    const flex = document.querySelector('.flex');
    const template = document.querySelector('#template-card').content;
    const clone = template.cloneNode(true);
    const fragment = document.createDocumentFragment();

    clone.querySelector('.card-body-img').setAttribute('src', api.img);
    clone.querySelector('.nombre').innerHTML = api.nombre;
    clone.querySelector('.estado').textContent = api.estado + " " + "-";
    clone.querySelector('.especie').textContent = api.especie;
    clone.querySelector('.genero').textContent = api.genero;
    clone.querySelector('.ubicacion').textContent = api.ubicacion;
    clone.querySelector('.origen').textContent = api.origen;
    

    fragment.appendChild(clone);
    flex.appendChild(fragment);
}