/**
 * Game class
 */
class Game {

  /**
   * Default Constructor
   */
  constructor ()
  {
    // Initialise your Image Asset giving, x & y position, width, height, canvas name it will be drawn on
    //this.AssetManager = new AssetManager(window.innerWidth / 2, window.innerHeight / 2, 2000, 500, "mycanvas");
    this.AssetManager = new AssetManager(100, 100 / 2, 1000, 100, "mycanvas");

    // Load your image from path.
    this.AssetManager.load("ImgCoin");
    // Set your Image to be animated giving, a loop bool, the speed it will change, how many frames in image.
    this.AssetManager.setSpriteSheet(true, 3, 10);
  }

  /**
   * initialiser function
   */
  init ()
  {

  }

  /**
   * Update function
   */
  update ()
  {
    gameNs.game.draw();
    // Update Animation
    gameNs.game.AssetManager.update();
    window.requestAnimationFrame(gameNs.game.update);
  }

  /**
   * Draw function
   */
  draw ()
  {
    var canvas = document.getElementById('mycanvas');
    var square = canvas.getContext('2d');
    square.clearRect(0,0, canvas.width, canvas.height);

    // Draw Image / Animation.
    this.AssetManager.draw();
  }
}
