const express = require('express');
const router = express.Router();
const {createUser,getAllUsers,getUserById,updateUser,deleteUser} = require('../Controllers/userController');

router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
