var express = require("express");
var router = express.Router();
var todosCtrl = require("../controller/todos");

router.get("/", todosCtrl.index);

module.exports = router;
