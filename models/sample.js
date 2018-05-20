const mongoose = require('mongoose');

const { Schema } = mongoose;

const sampleSchema = new Schema({
  sampleTitle: {
    type: String,
    required: true,
  },
  sampleNote: {
    type: String,
    required: true,
  },
  sampleDate: {
    type: Date,
    default: Date.now,
  },
  // user: {
  //   type: Schema.Types.ObjectId, ref: 'user'
  // }
});

const Sample = mongoose.model('Sample', sampleSchema);

module.exports = Sample;
