class GameOver extends Phaser.Scene {
  constructor() {
    super({
      key: "GameOver",
    });
  }

  preload() {
    this.load.image("newPinkman", "/sprites/new_pinkman.png");
  }

  create() {

    this.add.image(660, 360, "newPinkman").setOrigin(0.5, 0.40).setScale(.35);

    this.add
      .text(640, 360, "Game Over 💀", {
        font: "80px Source Sans Pro",
        fill: "#FFFFFF",
      })
      .setOrigin(0.5, 2.75);

    this.input.once(
      "pointerup",
      function () {
        this.scene.start("GameStart");
      },
      this
    );

    this.add
      .text(640, 360, "Click to return", {
        font: "40px Source Sans Pro",
        fill: "#FFFFFF",
      })
      .setOrigin(0.5, -5.5);
  }
}

export default GameOver;
