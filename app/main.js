// import ValuesController from "./Controllers/ValuesController.js";
import PokemonsApiController from "./Controllers/PokemonsApiController.js";

class App {
  // valuesController = new ValuesController();
  pokemonsApiController = new PokemonsApiController()
}

window["app"] = new App();
