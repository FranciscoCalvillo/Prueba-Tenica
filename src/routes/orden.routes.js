const {Router} = require('express');
const router = Router();

const { 
    createNewOrdenForm, 
    consultOrden, updateStatus, 
    editOrden, cancelOrden
} = require('../controllers/orden.controller');

const {isAuthenticated} = require('../helpers/authentification');
//add order
//router.get('/orden/add', renderNewOrden);
router.post('/orden/new-orden',isAuthenticated, createNewOrdenForm);

// get order
router.get('/orden',isAuthenticated, consultOrden);

//Edit Order
router.put('/orden/update-status/:id',isAuthenticated, updateStatus);
router.put('/orden/edit/:id',isAuthenticated, editOrden);

//delet Order
router.delete('/orden/delete/:id',isAuthenticated, cancelOrden);

module.exports =router;