const express = require('express');
const pokemonController = require('../controllers/pokemon');
const router = express.Router();

router.get('/pokemon', pokemonController.pokemon);


module.exports = router;