(function() {
    'use strict';

    function Preloader() {
        this.asset = null;
        this.ready = false;
    }

    Preloader.prototype = {

        preload: function() {
            this.asset = this.add.sprite(this.width / 2, this.height / 2, 'preloader');
            this.asset.anchor.setTo(0.5, 0.5);

            this.game.load.onLoadComplete.addOnce(this.onLoadComplete, this);

            this.game.load.setPreloadSprite(this.asset);

            this.game.load.image('background', '../assets/background.png');
            this.game.load.image('ground', '../assets/ground.png');
            this.game.load.image('title', '../assets/title.png');
            this.game.load.image('startButton', '../assets/start-button.png');

            this.game.load.spritesheet('bird', '../assets/bird.png', 34, 24, 3);

            this.game.load.spritesheet('pipe', '../assets/pipes.png', 54, 320, 2);

            this.load.image('instructions', '../assets/instructions.png');
            this.load.image('getReady', '../assets/get-ready.png');

            this.load.bitmapFont('flappyfont', '../assets/fonts/flappyfont/flappyfont.png', '../assets/fonts/flappyfont/flappyfont.fnt');

            this.load.audio('score', '../assets/snd/score.wav');
            this.load.audio('flap', '../assets/snd/flap.wav');
            this.load.audio('pipeHit', '../assets/snd/pipe-hit.wav');
            this.load.audio('groundHit', '../assets/snd/ground-hit.wav');

            this.load.image('scoreboard', '../assets/scoreboard.png');
            this.load.image('gameover', '../assets/gameover.png');
            this.load.spritesheet('medals', '../assets/medals.png', 44, 46, 2);
            this.load.image('particle', '../assets/particle.png');

        },

        create: function() {
            this.asset.cropEnabled = false;
        },

        update: function() {
            if ( !! this.ready) {
                this.game.state.start('menu');
            }
        },

        onLoadComplete: function() {
            this.ready = true;
        }
    };

    window['flappy'] = window['flappy'] || {};
    window['flappy'].Preloader = Preloader;

}());