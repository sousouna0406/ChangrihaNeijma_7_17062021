const { Router } = require('express');
const { signup, signin } = require('../controllers/authController');
const authParams = require('../middlewares/authParams');

const router = Router();

router.post('/signup', authParams, signup);
router.post('/signin', authParams, signin);

module.exports = router;