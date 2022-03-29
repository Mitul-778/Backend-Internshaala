const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://mitul:internshaala@cluster0.fspo1.mongodb.net/internshaala?retryWrites=true&w=majority"
  );
};

module.exports = connect;
