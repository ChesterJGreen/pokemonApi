// import ValuesController from "./Controllers/ValuesController.js";
import PokemonsApiController from "./Controllers/PokemonsApiController.js";
import MyPokemonsController from "./Controllers/MyPokemonsController.js";
class App {
  // valuesController = new ValuesController();
  pokemonsApiController = new PokemonsApiController()

  myPokemonsController = new MyPokemonsController()
}

window["app"] = new App();
