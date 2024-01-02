export default class Mainscene extends Phaser.Scene {
  constructor() {
      super("Mainscene");
  }

  preload() {
      // Tải âm thanh
      this.load.audio("backgroundMusic", "../audio/Batdau.mp3");
      this.load.image("Manhinhchinh", "../assets/Manhinhchinh.png");
      this.load.image("Play", "../assets/Play.png");
      this.load.image("Learn", "../assets/Learn.png");
      this.load.image("Luatchoi", "../assets/Luatchoi.png");
  }

  create() {
      // Tạo âm thanh và phát nó
      const backgroundMusic = this.sound.add("backgroundMusic", { loop: true });
      backgroundMusic.play();

      const background = this.add.image(1200 / 1.5, 700 / 1.8, "Manhinhchinh");

      const tenbtn = this.add.sprite(1600 / 2.6, 1000 / 1.93, "Play");
      tenbtn.setInteractive();
      tenbtn.on("pointerdown", () => {
          console.log("Nhấn nút Play!");
          // Tắt âm thanh khi chuyển sang scene mới
          backgroundMusic.stop();
          this.scene.start("Main2"); // Transition to the "Main2" scene
      });

      const learnbtn = this.add.sprite(600 / 0.6, 765 / 1.5, "Learn");
      learnbtn.setInteractive();
      learnbtn.on("pointerdown", () => {
          console.log("Nhấn nút Learn!");
          window.location.href = "/js/Learn.html";
      });
  }

  update() {}
}
