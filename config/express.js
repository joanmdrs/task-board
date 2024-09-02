const express    = require('express'); // express: É o framework web usado para criar a aplicação.
const bodyParser = require('body-parser'); // bodyParser: Middleware usado para analisar o corpo das requisições HTTP, facilitando o acesso aos dados enviados via POST, PUT, etc.
const config     = require('config') // config: É uma biblioteca que permite carregar configurações da aplicação a partir de arquivos de configuração.

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));

  // MIDDLEWARES
  app.use(bodyParser.json());

  return app;
};