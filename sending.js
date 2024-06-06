const { Router } = require('express');
const { sendMessage, startScreen } = require('./controller');
const router = Router();

router.get('/', startScreen);
router.post('/', sendMessage);

module.exports = router;