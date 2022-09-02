const ordenCntrl ={};

ordenCntrl.renderNewOrden = (req,res)=>{
    res.send('Add ORDER');
};

ordenCntrl.createNewOrdenForm = (req,res) =>{
    res.send('new orden');
} 

ordenCntrl.consultOrden =  (req,res) => {
    res.send('this are your orders')
}

ordenCntrl.editOrdenForm = (req,res) => {
    res.send('edit form');
}

ordenCntrl.editOrden = (req,res) => {
    res.send('update your note');
}

ordenCntrl.cancelOrden = (req,res) => {
    res.send('deleting note');
}
module.exports = ordenCntrl;