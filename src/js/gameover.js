(function () {
  'use strict';

  function GameOver() {}

  GameOver.prototype = {
    
    preload: function () {
    },

    create: function () {
     
    }
  };

  window['flappy'] = window['flappy'] || {};
  window['flappy'].GameOver = GameOver;

}());

