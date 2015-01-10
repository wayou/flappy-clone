window.onload = function() {
    'use strict';

    var game, ns = window['flappy'];

    game = new Phaser.Game(288, 505, Phaser.AUTO, '');
    game.state.add('boot', ns.Boot);
    game.state.add('preloader', ns.Preloader);
    game.state.add('menu', ns.Menu);
    game.state.add('game', ns.Game);

    game.state.start('boot');
};