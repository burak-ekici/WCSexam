const { model } = require('mongoose')

const ArgonautesModel = model(
  "ArgonautesCollection", //nom du model
  { // model pour chaque document
    Name: {
      type: String,
      required: true
    }
  },
  "argonautes" // selection de la table
);

module.exports = { ArgonautesModel }