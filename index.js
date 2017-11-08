/**
 * Created by hannahch on 2017-11-08.
 */
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