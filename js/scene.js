export default class Mainscene extends Phaser.Scene{
    
    constructor(){
        super("Mainscene")
    }
    preload(){
        this.load.image('Dog' ,'../assets/Dog.jpg');
        this.load.image('Christmas' ,'../assets/Christmas.jpg');
        this.load.image('Play' ,'../assets/Play.png');
        this.load.image('Learn' ,'../assets/Learn.png');
        this.load.image('PlayGame' ,'../assets/Back.png');
     
    }
    create(){
       const Bg = this.add.image(1800/2, 1000/2, 'Dog')
        Bg.setScale(0.5)
      // this.add.image(1300/2, 700/2, 'Cat2').setScale(1)
        const playbtn = this.add.sprite(1600/3, 1000/2.3, 'Play')
        playbtn.setInteractive();
        playbtn.on('pointerdown',()=>{
            console.log(this)
            Bg  = this.add.image(1500/2, 700/2, 'Christmas')
            const learnbtn = this.add.sprite( 470/0.5, 760/1.75,'PlayGame')
            // Bg.setTexture('Christmas')
        });

        const learnbtn = this.add.sprite( 470/0.5, 760/1.75,'Learn')
      learnbtn.setInteractive();
      learnbtn.on('pointerdown',() => {
        console.log('Nhấn nút Learn!');
        window.location.href = "/js/learn.html";
      })
      
}

    update(){

    }
  }
