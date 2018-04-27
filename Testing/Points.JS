const Enmap = require("enmap");
const Provider = require("enmap-sqlite");

client.points = new Enmap({provider: new Provider({name: "PointsData"})});

