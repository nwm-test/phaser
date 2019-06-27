var config = {
  type: Phaser.CANVAS,
  width: 600,
  height: 300,
  scene: {
    preload: preload,
    create: create
  }
};
var game = new Phaser.Game(config);
var clickCountText;
var clickButton;
var clickButton2;
var img;
var background;

function preload() {
  this.load.image('nwm-logo', 'images/nwm.png')
}

function create() {
  let clickCount = 0;
  img = this.add.image(190,50,'nwm-logo')
    .setInteractive()
    .on('pointerdown', () => updateClickCountText(++clickCount));
  clickCountText = this.add.text(100, 200, '');
  clickButton = this.add.text(100, 100, 'klick', {
      padding: {
        x: 12,
        y: 10
      },
      fill: 'black',
      backgroundColor: 'white'
    })
    .setInteractive()
    .on('pointerdown', () => updateClickCountText(++clickCount))
    .on('pointerover', () => enterButtonHoverState(clickButton))
    .on('pointerout', () => enterButtonRestState(clickButton));

   clickButton2 = this.add.text(200, 100, 'mich!', {
    padding: {
      x: 12,
      y: 10
    },
    fill: 'black',
    align: 'center',
    backgroundColor: 'white'
  })
  .setInteractive()
  .on('pointerdown', () => updateClickCountText(++clickCount))
  .on('pointerover', () => enterButtonHoverState(clickButton2))
  .on('pointerout', () => enterButtonRestState(clickButton2));

  updateClickCountText(clickCount);
}

function updateClickCountText(clickCount) {
  clickCountText.setText(`clicked ${clickCount} times.`);
}

function enterButtonHoverState(button) {
  button.setStyle({
    fill: '#ff0',
    backgroundColor: 'red'
  });

}

function enterButtonRestState(button) {
  button.setStyle({
    fill: 'black',
    backgroundColor: 'green'
  });
}
