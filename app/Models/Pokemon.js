import { ProxyState } from "../AppState.js";

export default class Pokemon {
  constructor({ _id, name, img, weight, height, types, order, id }) {
    this.order = order
    this.id = _id || ''
    this.name = name
    this.img = img || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    this.weight = weight
    this.height = height
    this.types = types.map(t => t.type.name)
  }

  get Template() {
    return `
    <div class="image-card">
      <h3>${this.name}</h3>
      <p>Types: ${this.types.join(", ")}</p>
      <p>Height: ${this.height}</>
      <p>Weight: ${this.weight}</>
      <div class="car bg-light shadow">
      <img src="${this.img}" class="w-80 image-center" alt="${this.name}">
      </div>
    </div>
    `
  }
}

