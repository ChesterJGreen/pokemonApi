import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokemonApi } from "../Services/AxiosService.js"
class PokemonsApiService {

  async getAllPokemon() {
    let res = await pokemonApi.get('pokemon?limit=200')
    console.log(res.data.results)
    ProxyState.allPokemonApiPokemons = res.data.results
  }

  async getPokemon(name) {
    let res = await pokemonApi.get('pokemon/' + name)
    console.log(res.data)
    ProxyState.activePokemon = new Pokemon(res.data)
  }
}

export const pokemonsApiService = new PokemonsApiService()