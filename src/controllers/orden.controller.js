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

ordenCntrl.updateStatus =  async(req, res) => {
    const Estatus = req.body; 
    console.log(Estatus)
    await Orden.findByIdAndUpdate(req.params.id,Estatus,{new:true});
    res.send('status updated');
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

    res.send('Order updated');
}

ordenCntrl.cancelOrden = async (req, res) => {
    const orden = await Orden.findById(req.params.id);
    const decision = isDeleted(orden.Estatus);
    const timeTranscure = miliSecsDif(orden.createdAt);

    //console.log(timeTranscure);
    if( decision ){
        //console.log(decision);
        if( timeTranscure){
            await Orden.findByIdAndDelete(req.params.id);
            res.send('Order deleted with refund')
        } else {
            await Orden.findByIdAndDelete(req.params.id);
            res.send('Order deleted without refund');
        }

    } else {
        res.send('cant delet this order');
    }   
   
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

function isDeleted (estatus){
    let resp = true;
    if(estatus == "en_ruta" || estatus == "entregado"){
        resp = false
    }
    return resp;
}

function miliSecsDif (creationDate){
    let resp = 0;
    let rembolso = false;
    let actualDate = Date.now();
    let tempDate = Date.parse(creationDate);

    resp = (actualDate - tempDate)/60000;
    
    if(resp < 2){
        rembolso = true;
    }
    
    return rembolso;

}

module.exports = ordenCntrl;