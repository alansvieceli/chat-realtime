module.exports = (application) => {
  application.post("/chat", (req, res) => {
    application.app.controllers.chat.iniciar(application, req, res);
  })  

  application.get("/chat", (req, res) => {
    application.app.controllers.chat.iniciar(application, req, res);
  }) 
}