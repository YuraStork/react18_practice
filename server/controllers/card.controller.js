const pokemons = require("../mock.json");
const CardController = (req, res) => {
  return res.json(pokemons)
}

module.exports = CardController;