const {Roouter, Router} = require('express');
const router = Router();

const { signInUsers, signUpRegister, logOut, getUsers  } = require('../controllers/users.controller')

router.post('/users/signin', signInUsers);
router.post('/users/signup',signUpRegister);
router.get('/users/logout',logOut);
router.get('/users', getUsers);

module.exports = router;