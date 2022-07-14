const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;
const atlasUri = process.env.ATLAS_URI;

//! attempt 1 (this works but is not ideal)

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on("connected", () => {
//   console.log(`Connected with Mongo DB on ${db.host}:${db.port}`);
//   // console.log(`Connected using ${process.env.MONGODB_URI}`);
// });

//! attempt 2
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log(`Connected with MongoDB on ${db.host}:${db.port}`);
});

//! attempt 3
// async function DbConnection() {
//   try {
//     await mongoose.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`Connected with Mongo DB on ${db.host}:${db.port}`);
//     // console.log(`Connected using ${process.env.MONGODB_URI}`);
//   } catch (error) {
//     console.log(error);
//   }
// }

//! attempt 4 From Mongo DB documentation

// const { MongoClient } = require("mongodb");
// const Db = process.env.ATLAS_URI;
// const client = new MongoClient(Db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// var _db;

// module.exports = {
//   connectToServer: function (callback) {
//     client.connect(function (err, db) {
//       // Verify we got a good "db" object
//       if (db) {
//         _db = db.db("employees");
//         console.log("Successfully connected to MongoDB.");
//       }
//       return callback(err);
//     });
//   },

//   getDb: function () {
//     return _db;
//   },
// };

//! attempt 5
// const db = mongoose.connection;

// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// db.on("connected", () => {
//   console.log(`Connected with MongoDB on ${db.host}:${db.port}`);
// });
