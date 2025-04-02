const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, minlength: 4 },
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  address: {
    street: { type: String },
    suite: { type: String },
    city: { type: String, required: true, match: /^[A-Za-z\s]+$/ },
    zipcode: { type: String, required: true, match: /^\d{5}-\d{4}$/ },
    geo: {
      lat: { type: String },
      lng: { type: String }
    }
  },
  phone: { type: String, required: true, match: /^\d-\d{3}-\d{3}-\d{4}$/ },
  website: { type: String, required: true, match: /^(https?):\/\/[^\s$.?#].[^\s]*$/ }
});

module.exports = mongoose.model('User', userSchema);
