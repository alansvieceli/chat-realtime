const { validationResult } = require('express-validator');

module.exports.iniciar = function(application, req, res) {
  let dadosForm = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.render("index", {validacao: errors.array()})
    return;
  }  

  application.get('io').emit('msgParaClient', {apelido: dadosForm.apelido, mensagem: ' acabou de entrar'});

  res.render("chat", {dadosForm: dadosForm});
}