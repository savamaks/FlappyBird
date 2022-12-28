class Background {
    constructor({ x,y, image, spiteSheet, drawEngine, game }) {
        
        this._x = x;
        this._y = y;
        this._image = image

        this._spriteSheet = spiteSheet;
        this._drawEngine = drawEngine;

        this._game = game
    }

    draw() {
        // this.update()
        this._drawEngine.drawImage({
            x: this._x,
            y: this._y,
            spriteSheet: this._spriteSheet,
            image: this._image,
            width: this._image.width,
            height: this._image.height
        });
    }

    // update() {
    //     this.index += 0.3;
    //     this.backgroudX = -((this.index * this.speed) % this._game._canvas.width);
    // }
}
