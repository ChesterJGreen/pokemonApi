import { ProxyState } from "../AppState.js";
import { pokemonsApiService } from "../Services/PokemonApiServices.js";

function _drawAll() {
  const pokemon = ProxyState.allPokemonApiPokemons
  let template = ''
  pokemon.forEach(p => template += `<li class="action" onclick="app.pokemonsApiController.getPokemon('${p.name}')">${p.name}</li>`)
  document.getElementById('api-pokemon').innerHTML = template
}
function _drawActive() {
  document.getElementById('active-pokemon').innerHTML = ProxyState.activePokemon.Template

}
export default class PokemonsApiController {
  constructor() {
    ProxyState.on('allPokemonApiPokemons', _drawAll)
    ProxyState.on('activePokemon', _drawActive)
    this.getAllPokemon()
  }
  async getAllPokemon() {
    try {
      await pokemonsApiService.getAllPokemon()
    } catch (e) {
      console.error('There was an issue getting all the Pokemon')
    }
  }
  async getPokemon(name) {
    try {
      console.log(name)
      await pokemonsApiService.getPokemon(name)
    } catch (e) {
      console.error('There was a problem getting your Pokemon')
    }
  }
}
