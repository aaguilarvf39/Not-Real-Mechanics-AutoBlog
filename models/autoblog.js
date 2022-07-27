const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
      type: String,
      match: /.{5,}/
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });

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
    },
    comments: [commentSchema]
});

module.exports = mongoose.model('Autoblog', autoblogSchema);