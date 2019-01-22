/**
 * function to load an image
 * {Integer} x position.
 * {Integer} y position.
 * {Integer} width of img.
 * {Integer} height of img.
 * {String} name of canvas to be drawn on.
 */
class  AssetManager{

    constructor (x, y, width, height, frameTop, frameLeft)
    {
        this.image = new Image();
        this.x = x;
        this.y = y;
        this.scaleX = 1;
        this.scaleY = 1;
        this.width = width;
        this.height = height;

        this.spriteSheet = false;
        this.frameTop = frameTop;
        this.frameLeft = frameLeft;

        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = 0;
        this.numberPerFrame = 1;
        this.loop = true;
        this.flipped = false;
    }

    /**
     * Draw function for the Image.
     */
    draw(ctx) {
         if(!this.spriteSheet){
            ctx.drawImage(this.image, 0, 0, this.width,
                this.height, this.x, this.y,
                this.width, this.height);
         }
         else{
            ctx.save();
            if(this.flipped){
                ctx.scale(-1,1);
                this.x = -this.x + this.width * -1;
            }

            ctx.drawImage(
                this.image,
                this.frameLeft + this.frameIndex * this.width,
                this.frameTop,
                this.width,
                this.height,
                this.x,
                this.y,
                this.width * this.scaleX,
                this.height * this.scaleY);
                ctx.restore();
         }
    }

    /**
     * Load The Image.
     * Must be called before draw.
     */
    load(path) {
        this.image.src = path;
    }

    setScale(x, y){
        this.scaleX = x;
        this.scaleY = y;
    }

    setPos(x, y) {
        this.x = x;
        this.y = y;
    }

    setDimensions(width, height) {
        this.width = width;
        this.height = height;
    }

    update() {
        this.tickCount += 1;

        if(this.tickCount > this.ticksPerFrame)
        {
            this.tickCount = 0;

            if( this.frameIndex < this.numberPerFrame -1)
            {
                this.frameIndex += 1 ;
            }
            else if ( this.loop)
            {
                this.frameIndex = 0;
            }
        }
    }

    /**
     * set Sprite sheet function for animations.
     */
    setSpriteSheet(spriteSheet, ticksperframe, numberperframe) {
        this.spriteSheet = true;
        this.image.src = spriteSheet;
        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = ticksperframe;
        this.numberPerFrame = numberperframe;
    }

}
