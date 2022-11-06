var express = require("express");
var router = express.Router();
var path = require("path");
var TinyDb = require("../utils/data/tinydb");
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");

const db = new TinyDb(path.join(__dirname, "blogs.json"));

// const upload = multer({
//   dest: "/backend/express-js/src/public/images",
// });

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/blog-posts", function (req, res, next) {
  db.read()
    .then(() => {
      res.send(db.data);
    })
    .catch(() => {
      next();
    });
});

router.post("/blog-posts", function (req, res, next) {
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

router.post("/blog-posts/image", function (req, res, next) {
  var json = db.data;
  json[req.body.id].imageUrl = req.body.imageUrl;
  db.write()
    .then(() => {
      res.send(db.data);
    })
    .catch(() => {
      next();
    });
});

/*Tried to use external library and store the 
images data in public/images folder but was getting an error 
*Error: EROFS: read-only file system, mkdir '/backend'* */

// router.post("/blog-posts/image", upload.single("file"), function (req, res) {
//   const reqPath = req.file.imageUrl;
//   const destPath = "/backend/express-js/src/public/images/image.png";

//   if (path.extname(req.file.originalname).toLowerCase() === ".jpg") {
//     fs.rename(reqPath, destPath, (err) => {
//       if (err) return handleError(err, res);
//     });
//   } else {
//     fs.unlink(reqPath, (err) => {
//       if (err) return handleError(err, res);
//     });
//   }
// });

router.delete("/blogs-posts", function (req, res, next) {
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
