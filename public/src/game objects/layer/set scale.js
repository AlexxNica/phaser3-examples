var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var layer;

function preload ()
{
    this.load.image('bar', 'assets/sprites/flectrum.png');
}

function create ()
{
    layer = this.add.layer();

    layer.createMultiple('bar', null, { quantity: 32, setXY: { x: 400, y: 300 }, setScale: { x: 2, y: 2, stepY: 0.1 } });
}

function update ()
{
    layer.rotate(0.005, 0.0005);
}
