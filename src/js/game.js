(function() {
    'use strict';

    function Game() {
        this.player = null;
    }
    Game.prototype = {
        create: function() {
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.game.physics.arcade.gravity.y = 1200;

            //the background
            this.background = this.game.add.sprite(0, 0, 'background');

            //the bird
            this.bird = new Bird(this.game, 100, this.game.height / 2);
            this.game.add.existing(this.bird);

            //the ground
            this.ground = new Ground(this.game, 0, 400, 335, 112);
            this.game.add.existing(this.ground);

            //keep the spacebar from propogating up to the browser
            this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

            //add keyobard control
            var flapKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            flapKey.onDown.add(this.bird.flap, this.bird);

            //mouse/touch control
            this.input.onDown.add(this.bird.flap,this.bird);

        },
        update: function() {
            this.game.physics.arcade.collide(this.bird, this.ground);
        }
    };
    window['flappy'] = window['flappy'] || {};
    window['flappy'].Game = Game;
}());