class Background {
    constructor({ x, y, width, height, frames, spiteSheet, drawEngine, game }) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.index = 0.3;
        this.speed = 3.1;
        this.backgroudX;

        this._spriteSheet = spiteSheet;
        this._drawEngine = drawEngine;

        this._game = game
    }

    draw() {
        this.update()
        this._drawEngine.drawImage({
            spriteSheet: this._spriteSheet,
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            xx:this.backgroudX
        });
    }

    update() {
        this.index += 0.3;
        this.backgroudX = -((this.index * this.speed) % this._game._canvas.width);
    }
}
