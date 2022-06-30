const { Router } = require('express');
const CardController = require('../controllers/card.controller');
const FindCardController = require('../controllers/find.controller');
const router = Router();

router.get("/cards", CardController)
router.post("/find", FindCardController)

module.exports = router;