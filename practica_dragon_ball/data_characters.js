//funcion donde vamos a recibir la informacion del personaje por su id
export async function getCharacterById(url) {
    try{
        //`https://dragonball-api.com/api/characters/${id}`
        const response_character = await fetch(url);
        const data_character = await response_character.json();
        return data_character; //{} objeto del personaje
    }catch(error){
        console.log('Error al obtener la informacion del personaje');
        
    }
}