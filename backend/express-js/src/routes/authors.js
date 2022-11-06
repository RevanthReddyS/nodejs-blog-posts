var express = require("express");
var router = express.Router();
var path = require("path");
var TinyDb = require("../utils/data/tinydb");
const { v4: uuidv4 } = require("uuid");

const db = new TinyDb(path.join(__dirname, "authors.json"));

router.get("/", function (req, res, next) {
  db.read()
    .then(() => {
      res.send(db.data);
    })
    .catch(() => {
      next();
    });
});

router.get("/:id", function (req, res, next) {
  let authorId = req.params.id;
  db.read()
    .then(() => {
      res.send(db.data[authorId]);
    })
    .catch(() => {
      next();
    });
});

router.post("/", function (req, res, next) {
  let json = db.data;
  let id = uuidv4();
  json[id] = req.body;
  db.write()
    .then(() => {
      res.send(db.data);
    })
    .catch(() => {
      next();
    });
});

router.put("/", function (req, res, next) {
  var json = db.data;
  json[req.body.id].name = req.body.name;
  db.write()
    .then(() => {
      res.send(db.data);
    })
    .catch(() => {
      next();
    });
});

router.delete("/", function (req, res, next) {
  var json = db.data;
  delete json[req.body.id];

  db.write()
    .then(() => {
      res.send(db.data);
    })
    .catch(() => {
      next();
    });
});

module.exports = router;
