const {Router} = require('express');
const router = Router();

const { 
    renderNewOrden, createNewOrdenForm, 
    consultOrden, editOrdenForm, 
    editOrden, cancelOrden 
} = require('../controllers/orden.controller');

//add order
router.get('/orden/add', renderNewOrden);
router.post('/orden/new-orden', createNewOrdenForm);

// get order
router.get('/orden', consultOrden);

//Edit Order
router.get('/orden/edit/:id', editOrdenForm);
router.put('/orden/edit/:id', editOrden);

//delet Order
router.delete('/orden/delet/:id', cancelOrden);

module.exports =router;