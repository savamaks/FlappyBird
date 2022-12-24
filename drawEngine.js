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
    drawImage({ spriteSheet, x, y, width, height, xx }) {
        super.drawImage({ spriteSheet, x, y, width, height });
        this.clear();

        this._ctx.drawImage(
            spriteSheet,

            x,
            y,
            width,
            height,

            xx + this._canvas.width,
            y,
            width,
            height
        );

        this._ctx.drawImage(
            spriteSheet,

            x,
            y,
            width,
            height,

            xx,
            y,
            width,
            height
        );
    }
}

class PipeDrawEngine extends DrawEngine {
    constructor({ canvas }) {
        super();
        this._canvas = canvas;
        this._ctx = this._canvas.getContext("2d");
    }

    drawImage({ spriteSheet, pipeUp, pipeDown, x, y, width, height, backgroudX, upPipe, downPipe }) {
        super.drawImage({ spriteSheet, x, y, width, height });

        this._ctx.drawImage(
            spriteSheet,

            pipeUp.x,
            pipeUp.y,
            pipeUp.width,
            pipeUp.height,

            backgroudX + this._canvas.width,
            upPipe,
            pipeUp.width,
            pipeUp.height
        );
        this._ctx.drawImage(
            spriteSheet,

            pipeDown.x,
            pipeDown.y,
            pipeDown.width,
            pipeDown.height,

            backgroudX + this._canvas.width,
            downPipe,
            pipeDown.width,
            pipeDown.height,
            console.log(upPipe + pipeUp.height)

        );
    }

    // drawImageTwo({ spriteSheet, pipeUp, pipeDown, x, y, width, height, backgroudX }) {
    //     super.drawImage({ spriteSheet, x, y, width, height });

    //     this._ctx.drawImage(
    //         spriteSheet,

    //         pipeUp.x,
    //         pipeUp.y,
    //         pipeUp.width,
    //         pipeUp.height,

    //         50,
    //         0,
    //         pipeUp.width,
    //         pipeUp.height
    //     );
    //     this._ctx.drawImage(
    //         spriteSheet,

    //         pipeDown.x,
    //         pipeDown.y,
    //         pipeDown.width,
    //         pipeDown.height,

    //        50,
    //         450,
    //         pipeDown.width,
    //         pipeDown.height
    //     );

    // }
}

class BirdDrawEngine extends DrawEngine {
    constructor({ canvas }) {
        super();
        this._canvas = canvas;
        this._ctx = this._canvas.getContext("2d");
    }
    drawImage({ spriteSheet, image, x, y, width, height }) {
        super.drawImage({ spriteSheet, image, x, y, width, height });

        this._ctx.drawImage(
            spriteSheet,

            image.x, // птичка
            image.y,
            width,
            height,

            x, // положение
            y,
            width,
            height,
        );

    }
    clear() {
        super.clear();
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
}
