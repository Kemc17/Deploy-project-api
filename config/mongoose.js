const Mongoose = require("mongoose");
const debug = require("debug")("app:mongoose");

// const dbhost = process.env.DBHOST || "localhost";
// const dbport = process.env.DBPORT || "27017";
// const dbname = process.env.DBNAME || "OSG-api";

const dburi = process.env.DBURI || "mongodb+srv://Dog17:RslgAjIsUxxaFcrc@osg-api.ktawppg.mongodb.net/OSG-API";

const connect = async () => {
  debug(dburi);
  try {
    await Mongoose.connect(dburi);
    debug("Conexión a la base exitosa")
  } catch (error) {
    debug("Error en la conexión de la base")
    process.exit(1);
  }
}

module.exports = {
  connect
}