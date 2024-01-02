export default class Main2 extends Phaser.Scene {

  constructor() {
    super("Main2");
  }

  preload() {
    // Tải âm thanh
    this.load.audio("backgroundMusic", "../audio/Game.mp3");

    this.load.image("Luatchoi", "../assets/Luatchoi.png");
    this.load.image("Playbutton", "../assets/Start.png");
  }

  create() {
    // Tạo âm thanh và phát nó
    const backgroundMusic = this.sound.add("backgroundMusic", { loop: true });
    backgroundMusic.play();

    const background = this.add.image(1200/1.5, 700/1.8, "Luatchoi");

    const PlayButton = this.add.sprite(1300/1.152, 700/1.1, "Playbutton");
    PlayButton.setInteractive();
    PlayButton.on("pointerdown", () => {
      console.log("Nhấn nút Play!");

      // Tắt âm thanh trước khi chuyển trang
      backgroundMusic.stop();

      // Chuyển đến trang "Mode.html"
      window.location.href = "./Mode.html";
    });
  }

  // Tắt âm thanh khi scene bị hủy
  destroy() {
    const backgroundMusic = this.sound.get("backgroundMusic");
    if (backgroundMusic && backgroundMusic.isPlaying) {
      backgroundMusic.stop();
    }

    super.destroy();
  }
}
