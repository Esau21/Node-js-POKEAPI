const express = require("express");
const app = express();
const poke = require('./router/router');
const exphbs = require('express-handlebars');

const hbs = exphbs.create({defaultLayout: 'main'});

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

app.set("port", process.env.PORT || 3000);
app.use('/api/poke', poke);



app.listen(app.get("port"), () => {
  console.log("Servidor Corriendo en el puerto:", app.get("port"));
  console.log('Edgar dev');
});
