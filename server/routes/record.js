const express = require("express");

// recordRoutes es la instancias del router de express-frame de n0de 
// el router añade  hce las veces de intermediario mediante el uso de path /record.
const recordRoutes = express.Router();

// se conecta a la db
const dbo = require("../db/conn");

// el id esta como string y se vvuelve objeto
const ObjectId = require("mongodb").ObjectId;


// se muestran todos los registros
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  db_connect
    .collection("records")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// con el ide se ubica un solo registro
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("records")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// para crear un registro nuevo 
recordRoutes.route("/record/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  db_connect.collection("records").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// Actualizar un resgitro existente
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();  
  let myquery = { _id: ObjectId( req.params.id )};  
  let newvalues = {    
    $set: {      
      name: req.body.name,     
      position: req.body.position,      
      level: req.body.level,    
  },  
};
db_connect
.collection("records")
.updateOne(myquery, newvalues, function (err, res) {
  if (err) throw err;
  console.log("1 document updated");
  response.json(res);
});
});

// eliminar un registro
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;