const { check } = require('express-validator');

module.exports = (application) => {
  application.post("/chat",
    [ check('apelido').isLength({ min: 3, max: 5 }).withMessage('Apelido deve ter no entre 3 e 15 caracter') ],
    (req, res) => {
      application.app.controllers.chat.iniciar(application, req, res);
    })

  application.get("/chat", (req, res) => {
    application.app.controllers.chat.iniciar(application, req, res);
  })
}