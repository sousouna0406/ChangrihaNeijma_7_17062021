const { Router } = require('express');
const { getOneUser, updateOneUser, deleteOneUser } = require('../controllers/userController');
const isOwnerOrAdmin = require('../middlewares/isOwnerOrAdmin');
const token = require('../middlewares/token');

const router = Router();

router.get('/:id', token, getOneUser);
router.put('/:id', token, isOwnerOrAdmin, updateOneUser);
router.delete('/:id', token, isOwnerOrAdmin, deleteOneUser)

module.exports = router;