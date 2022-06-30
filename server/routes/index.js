const { Router } = require('express');
const CardController = require('../controllers/card.controller');
const router = Router();

router.get("/cards", CardController)

module.exports = router;