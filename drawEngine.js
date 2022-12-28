class DrawEngine {
    constructor() {}
    drawImage({ spriteSheet, image, x, y, width, height }) {}
    clear() {}
}

class CanvasDrawEngine extends DrawEngine {
    constructor({ canvas }) {
        super();
        this._canvas = canvas;
        this._ctx = this._canvas.getContext("2d");
    }
    drawImage({ x, y, spriteSheet, image, width, height }) {
        super.drawImage({ spriteSheet, x, y, width, height });

        this._ctx.drawImage(
            spriteSheet,

            image.x,
            image.y,
            image.width,
            image.height,

            x,
            y,
            width,
            height
        );
    }

    clear() {
        super.clear();
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
}
