const ordenCntrl = {};
const { use } = require('passport');
//const _ = require('underscore');

const Orden = require('../models/orden');
const generalUser = "63152cb98439c1e4b1d3364f";
//const { checkout } = require('../routes/orden.routes');

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
    //console.log(req.body);
    if (
        latitudDestino && longitudDestino &&
        latitudOrigen && longitudOrigen &&
        Colonia && CalleDestino && codigoPostalDestino &&
        LocalidadOrigen && LocalidadDestino &&
        NumeroInterioOrigen && NumeroInterioDestino &&
        CalleOrigen && codigoPostalOrigen &&
        Pesos
    ) {
        try {
            const estatus = 'creado';
            const numProductos = Pesos.length;


            const pesoTotal = sumWeights(Pesos);

            const mixCorrdOrig = latitudOrigen + ', ' + latitudDestino + '';
            //const userId = req.user.id;
            if (isValidCoordinates(mixCorrdOrig)) {

                //console.log(validatorOrigen );
                const newOrden = new Orden({
                    latitudDestino, longitudDestino,
                    latitudOrigen, longitudOrigen,
                    Colonia, CalleDestino, codigoPostalDestino,
                    NumeroExtDestino, LocalidadDestino,
                    NumeroInterioOrigen, NumeroInterioDestino,
                    CalleOrigen, codigoPostalOrigen,
                    NumeroExtOrigen, LocalidadOrigen,
                    Pesos, Estatus: estatus,
                    numeroProductos: numProductos, tamaño: pesoTotal,
                    user: req.user.id
                })
                //console.log(newOrden);
                await newOrden.save();
                res.send('new Orden')

            } else {
                res.send('invalid Coords')
            }
        } catch (error) {
            console.error(error);
            res.send('Pesos invalidos o vacios');
        }
    } else {
        res.send('Wrong Request');
    }


}

ordenCntrl.consultOrden = async (req, res) => {
    const orden = await Orden.find({user:req.user.id});
    //console.log(orden)
    if (req.user.id == generalUser) {
        const ordenes = await Orden.find();
        if (ordenes) {
            res.json(ordenes);
        } else {
            res.send('empty')
        }
    } else{
        const ordenes = await Orden.find({ user: req.user.id });
        if (ordenes) {
            res.json(ordenes);
        } else {
            res.send('empty 2')
        }
    }
   

}

ordenCntrl.updateStatus = async (req, res) => {
    const Estatus = req.body;
    const user = await Orden.findById(req.params.id);
    //console.log(Estatus)
    if (req.user.id == user.user || req.user.id == generalUser) {
        console.log('entra');
        await Orden.findByIdAndUpdate(req.params.id, Estatus, { new: true });
        res.send('status updated');
    }
    else {
        res.send('cant edit status');
    }

}

ordenCntrl.editOrden = async (req, res) => {
    const estatus = await Orden.findById(req.params.id);

    if (req.user.id == estatus.user || req.user.id == generalUser) {
        if (estatus.Estatus != "cancelado") {

            const {
                latitudDestino, longitudDestino,
                latitudOrigen, longitudOrigen,
                Colonia, CalleDestino, codigoPostalDestino,
                NumeroExtDestino, LocalidadDestino,
                NumeroInterioOrigen, NumeroInterioDestino,
                CalleOrigen, codigoPostalOrigen,
                NumeroExtOrigen, LocalidadOrigen,
                Pesos
            } = req.body;
            //console.log(Pesos!= undefined);
            if (Pesos != undefined) {
                const numProductos = Pesos.length;
                const pesoTotal = sumWeights(Pesos);
                await Orden.findByIdAndUpdate(req.params.id, {
                    latitudDestino, longitudDestino,
                    latitudOrigen, longitudOrigen,
                    Colonia, CalleDestino, codigoPostalDestino,
                    NumeroExtDestino, LocalidadDestino,
                    NumeroInterioOrigen, NumeroInterioDestino,
                    CalleOrigen, codigoPostalOrigen,
                    NumeroExtOrigen, LocalidadOrigen,
                    Pesos, numeroProductos: numProductos, tamaño: pesoTotal
                }, { new: true })

                res.send('Order updated');
            }
            else {
                await Orden.findByIdAndUpdate(req.params.id, {
                    latitudDestino, longitudDestino,
                    latitudOrigen, longitudOrigen,
                    Colonia, CalleDestino, codigoPostalDestino,
                    NumeroExtDestino, LocalidadDestino,
                    NumeroInterioOrigen, NumeroInterioDestino,
                    CalleOrigen, codigoPostalOrigen,
                    NumeroExtOrigen, LocalidadOrigen
                }, { new: true })

                res.send('Order updated');
            }

        } else {
            res.send('This order is already cancel');
        }
    } else {
        res.send('cant edit')
    }

}

ordenCntrl.cancelOrden = async (req, res) => {
    const orden = await Orden.findById(req.params.id);

    if (req.user.id == orden.user || req.user.id == generalUser) {
        const decision = isDeleted(orden.Estatus);
        const timeTranscure = miliSecsDif(orden.createdAt);

        if (decision) {
            if (timeTranscure) {
                await Orden.findByIdAndUpdate(req.params.id, { Estatus: 'cancelado' });
                res.send('Order canceld with refund')
            } else {
                await Orden.findByIdAndUpdate(req.params.id, { Estatus: 'cancelado' });
                res.send('Order canceled without refund');
            }

        } else {
            res.send('cant cancel this order');
        }
    }
    else {
        res.send('cant reach this order')
    }
}


function sumWeights(Array) {
    let total = 0;
    for (let number of Array) {
        total += number;
    }
    //return total;

    let weight = '';
    if (total <= 5) {
        weight = 'S';
    } else if (total <= 15) {
        weight = 'M';
    } else if (total <= 25) {
        weight = 'L'
    } else {
        weight = 'E';
    }
    return weight;
}

function isDeleted(estatus) {
    let resp = true;
    if (estatus == "en_ruta" || estatus == "entregado") {
        resp = false
    }
    return resp;
}

function miliSecsDif(creationDate) {
    let resp = 0;
    let rembolso = false;
    let actualDate = Date.now();
    let tempDate = Date.parse(creationDate);

    resp = (actualDate - tempDate) / 60000;

    if (resp < 2) {
        rembolso = true;
    }

    return rembolso;

}

function isValidCoordinates(coordinates) {
    if (!coordinates.match(/^[-]?\d+[\.]?\d*, [-]?\d+[\.]?\d*$/)) {
        return false;
    }
    const [latitude, longitude] = coordinates.split(",");
    return (latitude > -90 && latitude < 90 && longitude > -180 && longitude < 180);
}

/*async function getUsuarioGeneralId(){
    const userId =  await Orden.findOne({email:"general@empresa.com"});
    if (userId){
        return userId.id;
    }
    return 'null';
}*/
module.exports = ordenCntrl;