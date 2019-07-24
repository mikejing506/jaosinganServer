var express = require('express');
var router = express.Router();

const Aria2 = require("aria2");
const aria2config = require("../aria2.json");
const aria2 = new Aria2(aria2config);
aria2
  .open()
  .then(() => console.log("open"))
  .catch(err => console.log("error", err));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', list : "" });
});

router.get('/test',async  function(req,res,next) {
  const magnet =
  "magnet:?xt=urn:btih:2C2ESHX4M6G7ZFIMKGPBY4JZEWOV3SJF";
  const [guid] = await aria2.call("addUri", [magnet], { dir: "/tmp" });
  res.send(guid);
});

module.exports = router;
