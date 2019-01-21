 // Global Variable
var gameNs = {};

function main()
{
    initCanvas();
    const game = new Game ();
    gameNs.game = game;
    game.init();
    game.update();
    //imageDraw();
}

/**
 * Initialises the canvas - the drawing surface. The canvas
 * is added to the document. When a HTML document is loaded into a
 * browser, it becomes a document object. This document object is
 * the root node of the HTML document and is considered the 'owner' of all other
 * nodes such as forms, buttons, the canvas etc.
 */
function initCanvas() {
    var canvas = document.createElement("canvas");
    canvas.id = 'mycanvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
}

function imageDraw() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("img/coin/.png");
    ctx.drawImage(img, 10, 10);
}
