
//extraemos el arreglo de todos los personajes
export async function getAllCharacters() {
    try{
        const response = await fetch("https://dragonball-api.com/api/characters");
        const data = await response.json();
        console.log(data);
        //data.items
        //accedemos a la propidad items (donde se encuentran los personajes)
        const { items } = data;
        return items; //[]
    }catch(error){
        console.log('Error al obtener la data de dragon ball', error);
    }
}