const {Router} = require('express');
const router = Router();

const { 
    renderNewOrden, createNewOrdenForm, 
    consultOrden, updateStatus, 
    editOrden, cancelOrden
} = require('../controllers/orden.controller');

//add order
//router.get('/orden/add', renderNewOrden);
router.post('/orden/new-orden', createNewOrdenForm);

// get order
router.get('/orden', consultOrden);

//Edit Order
router.put('/orden/update-status/:id', updateStatus);
router.put('/orden/edit/:id', editOrden);

//delet Order
router.delete('/orden/delete/:id', cancelOrden);

module.exports =router;