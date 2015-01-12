'use strict';

var PipeGroup = function(game, parent) {
    Phaser.Group.call(this, game, parent);

    this.topPipe = new Pipe(this.game, 0, 0, 0);
    this.add(this.topPipe);

    this.bottomPipe = new Pipe(this.game, 0, 440, 1);
    this.add(this.bottomPipe);

    this.hasScored = false;

    this.setAll('body.velocity.x', -200);
};

PipeGroup.prototype = Object.create(Phaser.Group.prototype);
PipeGroup.prototype.constructor = PipeGroup;

PipeGroup.prototype.update = function() {
    // write your prefab's specific update code here 
    this.checkWorldBounds();  
};

PipeGroup.prototype.reset = function(x, y) {
    // Step 1    
    this.topPipe.reset(0, 0);

    // Step 2
    this.bottomPipe.reset(0, 440); // Step 2

    // Step 3
    this.x = x;
    this.y = y;

    // Step 4
    this.setAll('body.velocity.x', -200);

    // Step 5
    this.hasScored = false;

    // Step 6
    this.exists = true;
};

PipeGroup.prototype.checkWorldBounds = function() {
    if (!this.topPipe.inWorld) {
        this.exists = false;
    }
};