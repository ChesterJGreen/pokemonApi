
import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandbox } from "./AxiosService.js";
class MyPokemonsService {
  async getMyPokemon() {
    const res = await sandbox.get()
    console.log(res.data);
    // ProxyState.myPokemons = res.data.map(p => new Pokemon)
  }
}
export const myPokemonsService = new MyPokemonsService()