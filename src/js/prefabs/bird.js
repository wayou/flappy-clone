'use strict';

var Bird = function(game, x, y) {
    //the super call to Phaser.Sprite
    Phaser.Sprite.call(this, game, x, y, 'bird');

    //super and animations setup here
    this.game.physics.arcade.enableBody(this);

    // initialize your prefab here
    // set the sprite's anchor to center
    this.anchor.setTo(0.5, 0.5);

    //add and play animation
    this.animations.add('flap');
    this.animations.play('flap', 12, true);

};

Bird.prototype = Object.create(Phaser.Sprite.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.update = function() {

    // write your prefab's specific update code here
    //rotate the bird back
    if (this.angle < 90) {
        this.angle += 2.5;
    }

};
Bird.prototype.flap = function() {
    this.body.velocity.y = -400;
    //rotate the bird
    this.game.add.tween(this).to({
        angle: -40
    }, 100).start();
};