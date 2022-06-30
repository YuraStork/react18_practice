const data = require("../mock.json");

const FindCardController = (req, res) => {
  const { search } = req.body;
  const pokemon = data.filter((e) => e.name.match(new RegExp(`^${search}`)));
  return res.json(pokemon)
}

module.exports = FindCardController;