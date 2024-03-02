const axios = require("axios");

const pokemon = async (req, res) => {
  try {
    //Hacemos la solicitud para poder obtener los detalles de los primeros 50 pokemons
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=44"
    );
    const pokemonLista = response.data.results;

    //Hacemos el array para poder almacenar los detalles de cada pokemon
    pokemonDetalles = [];

    //Hacemos el recorrido del for para nuetsros [pokemons]
    for (const poke of pokemonLista) {
      const response = await axios.get(poke.url);
      const detalles = response.data;
      pokemonDetalles.push(detalles);
    }

   /*  res.status(200).json({ pokemonDetalles }) */
    res.render("pokemon", {pokemonDetalles});
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { pokemon };
