//importar clase MissionCommander
const MissionCommander = require("./app/missionCommander/MissionCommander")

//instanciar al menos 3 objetos
const carlo = new MissionCommander("Carlo")
console.log(carlo.name)

const rosa = new MissionCommander("Rosa")
console.log(rosa.name)

const laura = new MissionCommander("Laura")
console.log(laura.name)

const manuel = new MissionCommander("Manuel")
console.log(manuel.name)