const { Router } = require('express');
const { getAllPosts, getOnePost, createOnePost, updateOnePost, deleteOnePost } = require('../controllers/postController');
const isOwnerOrAdmin = require('../middlewares/isOwnerOrAdmin');
const token = require('../middlewares/token');

const router = Router();

router.get('/', token, getAllPosts);
router.get('/:id', token, getOnePost);
router.post('/', token, createOnePost);
router.put('/:id', token, isOwnerOrAdmin, updateOnePost);
router.delete('/:id', token, isOwnerOrAdmin, deleteOnePost)

module.exports = router;