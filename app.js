var express = require('express')
var app = express()
const morgan = require('morgan')
const layout = require('./views/layout')
const { db } = require('./models');

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.use(morgan('dev'))
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.send(layout())
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});


