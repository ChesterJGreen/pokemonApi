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
    <div class="row image-card">
    <div class="col-12">
        <div class="row">

            <div class="col-6">
                <h3>${this.name}</h3>
                <p>Types: ${this.types.join(", ")}</p>
                <p>Height: ${this.height}</>
                <p>Weight: ${this.weight}</>
            </div>
            <div class="col-3 align-self-center justify-content-end" id="button">
            <img class="btn-image" src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/1845b975be9fc5a6038e6d73e7377b6f/f6207d49-80dd-42c6-90aa-422c426c9a20_rw_1200.png?h=a8260f6a53674e0b450e98e9de4a6527">
                <button type="button" class="btn btn-info"
                onclick="app.myPokemonsController.addPokemon()">Catch'em</button>
                </div>
        </div>
    </div>
    <div class="col-12 car bg-light shadow">
        <img src="${this.img}" class="w-80 image-center" alt="${this.name}">
    </div>
</div>
    `
  }
  get Button() {
    const exists = ProxyState.myPokemons.find(p => p.name === ProxyState.activePokemon.name)
    if (this.order) {
      return `<button type="button" class="btn btn-info" ${exists ? 'disabled' : ''}
      onclick="app.myPokemonsController.addPokemon()">Catch'em</button>`

    }
    return `<button type="button" class="btn btn-success"
  onclick="app.myPokemonsController.removePokemon()">Catch'em</button>
  </div>`

  }
}

