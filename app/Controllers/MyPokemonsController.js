import { ProxyState } from "../AppState.js";
import { myPokemonsService } from "../Services/myPokemonsService.js";

function _drawAll() {
  const pokemon = ProxyState.myPokemons
  const activePokemon = ProxyState.activePokemon || {}
  let template = ""
  pokemon.forEach(p => template`<li class="action ${activePokemon.id === p.id ? 'text-primary' : ''}" onclick="app.myPokemonsController.setPokemon('${p.id}')">`)
  document.getElementById()
}

export default class MyPokemons {
  constructor() {
    ProxyState.on('myPokemons', _drawAll)
    this.getMyPokemon()
  }
  async getMyPokemon() {
    try {
      await myPokemonsService.getMyPokemon()
    } catch (e) {
      console.error('could not get MyPokemon ' + e)
    }
  }
}