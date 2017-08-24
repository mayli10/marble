const mongoose = require('mongoose');
const connect = process.env.MONGODB_URI;
mongoose.Promise = global.Promise;

mongoose.connect(connect);

var userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

var User = mongoose.model('User', userSchema);

module.exports = {
  User: User,
}
