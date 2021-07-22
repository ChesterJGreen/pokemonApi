
import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandbox } from "./AxiosService.js";
class MyPokemonsService {
  async getMyPokemon() {
    const res = await sandbox.get()
    console.log(res.data);
    ProxyState.myPokemons = res.data.map(p => new Pokemon(p))
  }
  async addPokemon() {
    const res = await sandbox.post('', ProxyState.activePokemon)
    console.log(res.data)
    const newPokemon = new Pokemon(res.data)
    ProxyState.myPokemons = [...ProxyState.myPokemons, newPokemon]
    ProxyState.activePokemon = newPokemon
  }
  setPokemon(id) {
    const pokemon = ProxyState.myPokemons.find(s => s.id == id)
    if (!pokemon) { throw new Error('invalid pokemon id') }
  }
  async removePokemon() {
    const res = await sandbox.delete(ProxyState.activePokemon.id)
    ProxyState.myPokemons = ProxyState.myPokemons.filter(s => s.id != ProxyState.activePokemon.id)
    ProxyState.activePokemon = null
  }

}
export const myPokemonsService = new MyPokemonsService()