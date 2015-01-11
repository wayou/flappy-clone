(function() {
    'use strict';

    function Menu() {
        this.titleTxt = null;
        this.startTxt = null;
    }

    Menu.prototype = {

        preload: function() {},

        create: function() {
            //the background
            this.background = this.game.add.sprite(0, 0, 'background');
            //the tile ground
            this.ground = this.game.add.tileSprite(0, 400, 288, 112, 'ground');
            this.ground.autoScroll(-200, 0);

            //now lets begin the title
            //first create a group to hold the title and bird
            this.titleGroup = this.game.add.group();

            //2nd, create the title sprite and add to the title group
            this.title = this.game.add.sprite(0, 0, 'title');
            this.titleGroup.add(this.title);

            //3rd, create the bird and add to the title group
            this.bird = this.game.add.sprite(200, 5, 'bird');
            this.titleGroup.add(this.bird);

            //4th, animate the bird
            this.bird.animations.add('flap');
            this.bird.animations.play('flap', 12, true);

            //5th place the title group to a proper position
            this.titleGroup.position.setTo(30, 100);

            //final step, oscillating the title group
            this.game.add.tween(this.titleGroup).to({
                y: 115
            }, 350, Phaser.Easing.Linear.NONE, true, 0, -1, true);

            //the start button
            this.startBtn = this.game.add.button(this.game.width / 2, 300, 'startButton', this.startClick, this);
            this.startBtn.anchor.setTo(0.5, 0.5);

             //keep the spacebar from propogating up to the browser
            this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

            //add keyobard control
            var startKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            startKey.onDown.add(this.startClick, this);
        },

        update: function() {

        },
        startClick: function() {
            // start button click handler
            // start the 'play' state
            this.game.state.start('game');
        }
    };

    window['flappy'] = window['flappy'] || {};
    window['flappy'].Menu = Menu;

}());