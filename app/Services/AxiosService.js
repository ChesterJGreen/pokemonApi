// @ts-ignore
export const pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 10000
})

// @ts-ignore
export const sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/ChesterG/pokemon',
  timeout: 10000
})