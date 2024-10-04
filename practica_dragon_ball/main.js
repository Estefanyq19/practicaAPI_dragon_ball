import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { poke, type, id, abilities, item1, item2, item3, saludar } from './desestructuracion.js'
import { getAllCharacters, getPlanets } from './characters.js'
import { displayCharacters } from './display_characters.js'

displayCharacters();
//getPlanets();
//getAllCharacters();

saludar()

console.log(`Pokemon: ${poke}, Tipo: ${type}`);
console.log(id);
console.log(abilities);
abilities.map((item) => {
  console.log(`Habilidad: ${item}`);
})

console.log(item1);
console.log(`${poke} tiene estas habilidades: ${item1}, ${item2}, ${item3}`);

document.querySelector('#app').innerHTML = `
  <div>
    <h1>API DRAGON BALL</h1>
    <div id="planet">
        <label>Seleccion un planeta: </label>
    </div>
    <div id="list-dragon-ball"></div>
  </div>
`
