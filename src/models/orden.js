const {Schema,model}=require('mongoose');

const NoteSchema = new Schema({
    latitudOrigen: {
        type: Float32Array,
        require: true
    },
    longitudOrigen: {
        type: Float32Array,
        require: true
    },
    latitudDestino: {
        type: Float32Array,
        require: true
    },
    longitudDestino: {
        type: Float32Array,
        require: true
    },
    Colonia: {
        type: String,
        require: true
    },
    Calle: {
        type: String,
        require: true
    },
    codigoPostal: {
        type: Int16Array,
        require: true
    },
    NumeroInterio: {
        type: Int16Array,
        require: true
    },

    NumeroExterior: Int16Array,

    Localidad: {
        type: String,
        require: true
    },
    Pesos: {
        type: Array,
        require: true
    },

    numeroProductos: Int16Array,

    Estatus: {
        type: String,
        require: true
    },

    Id: Int16Array

}, {
    timestamps: true
})

module.exports=model('OrdenCompra',OrdenSchema); 