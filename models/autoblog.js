const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoblogSchema = new Schema({
    make: {
        type: String,
        enum: ['Subaru', 'Audi', 'Chevrolet', 'Honda', 'Nissan', 'Toyota']
    },
    model: {
        type: String,
        enum: ['Bugeye WRX', 'Blobeye WRX', 'VA STI', 'S6', 'Silverado', 'S2000', 'GTR', 'Supra']
    },
    engine: {
        type: String,
        enum: ['EJ205', 'EJ257', 'EA825', 'Vortec 5300', 'F20C', 'RB26DETT', '2JZGTE']
    }
});

module.exports = mongoose.model('Autoblog', autoblogSchema);