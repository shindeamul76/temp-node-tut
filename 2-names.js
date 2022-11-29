const Amul = "Amul";
const Subham = "Subham";


module.exports = {Amul, Subham}


// App.js -----> Content

const names = require("./2-names");
const SayHi = require("./utils");

SayHi("Arvind")
SayHi(names.Amul)
SayHi(names.Subham)