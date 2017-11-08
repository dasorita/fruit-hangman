for(var i='a'.charCodeAt(0); i<='z'.charCodeAt(0); i++){
    var keys = document.getElementById('keys');
    var button = document.createElement('button');
    keys.appendChild(button);
    button.innerHTML = String.fromCharCode(i);
    button.setAttribute('class','alphaBtn');
}

keys.onclick = function () {
    var val = event.target.innerHTML;
    game.checkAnswer(val);
};

// function Game(options) {
//     this.life = options.life;
//     this.count = count;
//
// }
//
//
// var game1 = new Game({life: 5, count:0});

var game = {
    life: 5,
    count: 0,
    answer: null,
    hint: null,
    guess: [],

    init: function() {

    },
    correct: function() {

    },
    incorrect: function() {

    },
    checkAnswer: function (val) {

    },
    showResult: function () {

    },
    isOver: function () {

    },
    isClear: function () {

    },
    clear: function () {

    },
    gameOver: function () {

    }
};