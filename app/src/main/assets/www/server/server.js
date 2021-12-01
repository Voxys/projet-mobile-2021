var Base = require("./Base.js");
var base = new Base();

// base.initialiserConnexion();

var express = require('express');
var cors = require('cors');
var http = require('http');
var app = express();
var server = http.createServer(app);

const allowedOrigins = ['null'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }

}));

// ------EXPRESS------ //

app.get('/', async function (req, res) {
  // filter la requete faite depuis BaseDeDonneesDAO sur l'app
  // specifier un header qui indique ce qu'on veux obtenir 
  // ou
  // Envoyer la requete directement depuis l'app 
  // if (req.headers.requete == obtenirCoordonnees) {
  //   try {
  //     var coordonnees = await base.obtenirCoordonnees(req.headers.id);
  //   } catch (err) {
  //     console.log(err.stack);
  //   }
  //   res.send(coordonnees);
  // }
  switch(req.headers.requete){
    case "obtenirCoordonnees":
      try {
        var coordonnees = await base.obtenirCoordonnees(req.headers.id);
      } catch (err) {
        console.log(err.stack);
      }
      res.send(coordonnees);
    break;
    case "obtenirListeSentiers":
      try {
        var listeSentiers = await base.obtenirListeSentiers();
      } catch (err) {
        console.log(err.stack);
      }
      res.send(listeSentiers);
    break;
  }

});

server.listen(3000);
console.log('Express server started on port %s', server.address().port);