import Main2 from "./Main2.js"
import Mainscene from "./code.js"

const config ={
    type: Phaser.AUTO,
    width:1500,
    height:750,
    backgroundColor:0x1B1B1D,
    scene: [Mainscene, Main2,]
}
var game = new Phaser.Game(config)