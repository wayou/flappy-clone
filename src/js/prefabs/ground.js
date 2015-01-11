'use strict';

var Ground = function(game, x, y, width, height) {
    Phaser.TileSprite.call(this, game, x, y, width, height, 'ground');

    this.autoScroll(-200,0);

    //enable physics 
    this.game.physics.arcade.enableBody(this);

    //prevent falling
    this.body.allowGravity=false;
    this.body.immovable=true;
};

Ground.prototype = Object.create(Phaser.TileSprite.prototype);
Ground.prototype.constructor = Ground;

Ground.prototype.update = function() {
    // write your prefab's specific update code here  
};