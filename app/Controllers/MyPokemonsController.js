import { ProxyState } from "../AppState.js";
import { myPokemonsService } from "../Services/myPokemonsService.js";

function _drawAll() {
  const pokemon = ProxyState.myPokemons
  const activePokemon = ProxyState.activePokemon || {}
  let template = ""
  pokemon.forEach(p => template += `<li class="action ${activePokemon.id === p.id ? 'text-primary' : ''}" onclick="app.myPokemonsController.setPokemon('${p.id}')">`)
  if (!template) {
    template += '<p><em>No Pokemon Caught</em></p>'
  }
  document.getElementById('my-pokemon').innerHTML = template
}

export default class MyPokemonsController {
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
  async addPokemon() {
    try {
      await myPokemonsService.addPokemon()
    } catch (e) {
      console.error("couldn't add your pokemon" + e)
    }

  }
  setPokemon(id) {
    try {
      myPokemonsService.setPokemon(id)
    } catch (e) {
      console.error('invalid id')
    }
  }
  async removePokemon() {
    try {
      await myPokemonsService.removePokemon()
    } catch (e) {
      console.error('invalid id')
    }
  }

}

