// import Phaser from 'phaser';

class Boot extends Phaser.Scene {
  constructor() {
    super({
      key: "Boot",
    });
  }

  preload = () => {
    this.load.spritesheet("run", "/sprites/run.gif", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("sadGuy", "/sprites/cat.png", {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.image("ball1", "/sprites/balls/ball1.png");
    this.load.image("ball2", "/sprites/balls/ball2.png");
    this.load.image("ball3", "/sprites/balls/ball3.png");
    this.load.image("base_tiles", "/tiles/space_tileset.png");
    this.load.image("muteMan", "/sprites/muteMan.png");
    this.load.image("eatMe", "/sprites/cake.png");
    this.load.image("drinkMe", "/sprites/drink.png");
    this.load.image("tree", "/sprites/tree.png");
    this.load.image("pinkman", "/sprites/pinkman.png");
    this.load.image("tree1", "/sprites/trees/tree1.png");
    this.load.image("tree2", "/sprites/trees/tree2.png");
    this.load.image("tree3", "/sprites/trees/tree5.png");
    this.load.image("tree4", "/sprites/trees/tree7.png");
    this.load.image("heart", "/sprites/heart.png");
    this.load.image("ball1", "/sprites/balls/ball1.png");
    this.load.tilemapTiledJSON("tilemap", "/tiles/space_map.json");
    this.load.audio("bens_beautiful_song", "/audio/music_2.mp3");
    this.load.audio("treasure_song", "/audio/treasure_hunting.mp3");
    this.load.audio("beep", "/audio/beep.mp3");
    this.load.audio("wormhole", "/audio/wormholefx.mp3");

    this.gameWidth = this.sys.game.canvas.width;
    this.gameHeight = this.sys.game.canvas.height;
  };

  create() {
    this.scene.start("GameStart");
  }
}

export default Boot;
