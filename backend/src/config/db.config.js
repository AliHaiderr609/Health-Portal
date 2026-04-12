// const url ='mongodb+srv://aqsa:12345@cluster0.4lxvog1.mongodb.net/'

const url = 'mongodb+srv://aqsa:abc_123@cluster0.zlexagr.mongodb.net/'

// const url = 'mongodb+srv://aqsa:abc_123@cluster0.zlexagr.mongodb.net/';


const mongoose = require("mongoose");
const { mongo, env } = require("./vars");

/**
 * Establish a connection to the MongoDB database using Mongoose.
 *
 * @returns {object} - The Mongoose database connection object.
 *
 */

exports.connect = () => {
  mongoose.connect(mongo.uri);

  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("Connected to MongoDB successfully!");
  });

  connection.on("error", (err) => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(-1);
  });

  if (env === "development") {
    mongoose.set("debug", true);
  }

  return connection;
};




