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
var d = { v: 260 };

function preload ()
{
    this.load.image('ball', 'assets/sprites/shinyball.png');
}

function create ()
{
    var circle = new Phaser.Geom.Circle(400, 300, d.v);

    layer = this.add.layer();

    layer.createMultiple('ball', null, { quantity: 32 });

    layer.positionAroundCircle(circle);

    TweenMax.to(d, 3, {
        v: 0,
        delay: 2,
        ease: Sine.easeInOut,
        repeat: -1,
        yoyo: true
    });
}

function update ()
{
    layer.rotateAroundDistance({ x: 400, y: 300 }, 0.02, d.v);
}
