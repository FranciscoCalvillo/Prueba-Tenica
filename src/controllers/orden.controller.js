const ordenCntrl = {};
//const _ = require('underscore');

const Orden = require('../models/orden');
const { checkout } = require('../routes/orden.routes');

ordenCntrl.renderNewOrden = (req, res) => {
    res.render('orden/newOrden')
    res.send();
};

ordenCntrl.createNewOrdenForm = async (req, res) => {
    const {

        //Destino
        latitudDestino,
        longitudDestino,
        Colonia,
        CalleDestino,
        codigoPostalDestino,
        NumeroInterioDestino,
        NumeroExtDestino,
        LocalidadDestino,
        //Origen
        CalleOrigen,
        codigoPostalOrigen,
        NumeroInterioOrigen,
        NumeroExtOrigen,
        LocalidadOrigen,
        latitudOrigen,
        longitudOrigen,
        //general data
        Pesos
    } = req.body;

    if (
        latitudDestino && longitudDestino &&
        latitudOrigen && longitudOrigen &&
        Colonia && CalleDestino && codigoPostalDestino &&
        LocalidadOrigen && LocalidadDestino &&
        NumeroInterioOrigen && NumeroInterioDestino &&
        CalleOrigen && codigoPostalOrigen &&
        Pesos
    ) {
        const estatus = 'creado';
        const numProductos = Pesos.length;
        const pesoTotal = sumWeights(Pesos);

        //console.log(pesoTotal);
        const newOrden = new Orden({
            latitudDestino, longitudDestino,
            latitudOrigen, longitudOrigen,
            Colonia, CalleDestino, codigoPostalDestino,
            NumeroExtDestino, LocalidadDestino,
            NumeroInterioOrigen, NumeroInterioDestino,  
            CalleOrigen, codigoPostalOrigen,
            NumeroExtOrigen, LocalidadOrigen,
            Pesos,Estatus:estatus,
            numeroProductos:numProductos,tamaño:pesoTotal  
        })
        await newOrden.save();
        res.send('new Orden')
    } else {
        res.send('Wrong Request');
    }

}

ordenCntrl.consultOrden = async(req, res) => {
    const ordenes = await Orden.find();
    res.json(ordenes);
}

ordenCntrl.editOrdenForm = (req, res) => {
    res.send('edit form');
}

ordenCntrl.editOrden = async (req, res) => {
    const {
        latitudDestino,longitudDestino,
        latitudOrigen, longitudOrigen,
        Colonia, CalleDestino, codigoPostalDestino,
        NumeroExtDestino, LocalidadDestino,
        NumeroInterioOrigen, NumeroInterioDestino,  
        CalleOrigen, codigoPostalOrigen,
        NumeroExtOrigen, LocalidadOrigen,
        Pesos
    } = req.body;
    //console.log(latitudDestino);

   await Orden.findByIdAndUpdate(req.params.id,{
        latitudDestino,longitudDestino,
        latitudOrigen, longitudOrigen,
        Colonia, CalleDestino, codigoPostalDestino,
        NumeroExtDestino, LocalidadDestino,
        NumeroInterioOrigen, NumeroInterioDestino,  
        CalleOrigen, codigoPostalOrigen,
        NumeroExtOrigen, LocalidadOrigen,
        Pesos
   }, {new:true})

    res.send('update your note');
}

ordenCntrl.cancelOrden = async (req, res) => {
    const checkEstatus = await Orden.findById(req.params.id);
    console.log(checkEstatus);
    //await Orden.findByIdAndDelete(req.params.id);
    res.send('deleting note');
}


function sumWeights (Array) {
    let total = 0;
    for (let number of Array){
        total += number;
    }
    //return total;

    let weight = '';
    if( total <= 5){
        weight = 'S';
    } else if(total <= 15){
        weight = 'M';
    } else if(total <= 25){
        weight = 'L'
    } else {
        weight = 'E';
    }
    return weight;
}

module.exports = ordenCntrl;