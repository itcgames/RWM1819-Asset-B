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
        this.horizontalSheet = true;
        var TO_RADIANS = Math.PI/180;
    }


    drawRotatedImage(x, y, angle, ctx)
    {
        // save the current co-ordinate system
        // before we screw with it
        ctx.save();

        // move to the middle of where we want to draw our image
        ctx.translate(x, y);

        // rotate around that point, converting our
        // angle from degrees to radians
        ctx.rotate(angle * this.TO_RADIANS);

        // draw it up and to the left by half the width
        // and height of the image
        ctx.drawImage(this.image, -(this.image.width/2), -(this.image.height/2));

        // and restore the co-ords to how they were when we began
        ctx.restore();
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

            if(this.horizontalSheet){
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
            else{
                ctx.drawImage(
                    this.image,
                    this.frameLeft,
                    this.frameTop + this.frameIndex * this.height,
                    this.width,
                    this.height,
                    this.x,
                    this.y,
                    this.width * this.scaleX,
                    this.height * this.scaleY);
                    ctx.restore();
            }
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
