class Pipes {
    constructor({ x, y, frames, spiteSheet, pipeDrawEngine, game }) {
        this.x = x;
        this.y = y;
        this.index = 0.3;
        this.speed = 3.1;
        this.backgroudX;

        this._frames = frames;
        this._frameIdx = 0;
        this._spriteSheet = spiteSheet;
        this._pipeDrawEngine = pipeDrawEngine;
        this._game = game;
    }

    draw() {
        this.update()
        this._pipeDrawEngine.drawImage({
            spriteSheet: this._spriteSheet,
            pipeUp: this._frames[0],
            pipeDown: this._frames[1],
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            xx: this.backgroudX
        });
    }

    update() {
        this.index += 0.3;
        this.backgroudX = -((this.index * this.speed) % (this._game._canvas.width + 50));
    }
}
