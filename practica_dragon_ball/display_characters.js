import { getCharacterById } from "./data_characters";
import { getAllCharacters } from "./list_characters";

export async function displayCharacters() {
    
    //obtener la informacion de todos los personajes
    const dragonBallList = await getAllCharacters();

    const dragonBallContainer = document.getElementById('list-dragon-ball');

    //limpiando el contenido
    dragonBallContainer.innerHTML = "";
    for(const character of dragonBallList){
        const { id, name } = character

        const data_character = await getCharacterById(`https://dragonball-api.com/api/characters/${id}`);

        const { name: nameCharacter, race, image, originPlanet, transformations } = data_character

            //desestructurando el objeto del planeta
            const { name: planet } = originPlanet 

            const itemTransformation = transformations.map(({ name }) => name)
            //[nombres de las transformaciones]
            //console.log("Transformaciones: ", itemTransformation); //[]
            
            //creando un nuevo elemento html (article)
            const article = document.createElement('article');
            //operador ternario ? proceso : otra cosa
            article.innerHTML = `
                <h4>${nameCharacter}</h4>
                <img src=${image} >
                <p>Raza: ${race}</p>
                <p>Planeta: ${planet}</p>
                <p>Tranformaciones: ${itemTransformation.length > 0 ? itemTransformation.join(', ') : 'No hay transformaciones'}</p>
            `;
            //agregar un hijo al contenedor de la lista de personajes
            dragonBallContainer.appendChild(article)
    }
}