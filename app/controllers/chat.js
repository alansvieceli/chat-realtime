const { validationResult } = require('express-validator');

module.exports.iniciar = function(application, req, res) {
  let dadosForm = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.render("index", {validacao: errors.array()})
    //return res.status(422).json({ errors: errors.array() });
    return;
  }
  console.log("XXXXXXXX")
  res.render("chat");
}