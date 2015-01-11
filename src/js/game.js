(function() {
    'use strict';

    function Game() {
        this.player = null;
    }
    Game.prototype = {
        create: function() {
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.game.physics.arcade.gravity.y = 500;

            //the background
            this.background = this.game.add.sprite(0, 0, 'background');

            //the bird
            this.bird = new Bird(this.game, 100, this.game.height / 2);
            this.game.add.existing(this.bird);

            //the ground
            this.ground = new Ground(this.game, 0, 400, 335, 112);
            this.game.add.existing(this.ground);

        },
        update: function() {
            this.game.physics.arcade.collide(this.bird, this.ground);
        }
    };
    window['flappy'] = window['flappy'] || {};
    window['flappy'].Game = Game;
}());