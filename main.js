
class GameScene extends Phaser.Scene {
    preload() {
        this.load.bitmapFont("arcade",
        "arcade.png",
        "arcade.xml");
    }
    create() {
        let text = this.add.bitmapText(200, 300, 'arcade', '', 24).setOrigin(0.5)
            .setCenterAlign().setInteractive();

        text.setText([
            'Phaser 3',
            'BitmapText',
        ]);
    }
}

function main() {
    game = new Phaser.Game({
        width:500,
        height:500,
        scene : [GameScene]
    });
}

window.onload = main;