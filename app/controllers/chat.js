const { validationResult } = require('express-validator');

module.exports.iniciar = function(application, req, res) {
  let dadosForm = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.render("index", {validacao: errors.array()})
    return;
  }  
  res.render("chat");
}