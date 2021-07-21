import { ProxyState } from "../AppState.js";

export default class Pokemon {
  constructor({ _id, name, img, weight, height, types, order }) {
    this.order = order
    this.id = _id || ''
    this.name = name
    this.img = img || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.order}.svg`
    this.weight = weight
    this.height = height
    this.types = types.type.name
  }

  get Template() {
    return `
    <div>
      <h3>${this.name}</h3>
      <p>Types: [${this.types.join(", ")}]</p>
      <p>Height: ${this.height}</>
      <p>Weight: ${this.weight}</>
      <div class="car bg-light shadow">
      <img src="${this.img}" class="w-80" alt="${this.name}">
      </div>
    </div>
    `
  }
}

