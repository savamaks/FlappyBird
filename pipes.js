class Pipes {
    constructor({ x, y, frames, spiteSheet, pipeDrawEngine, game }) {
        this.x = x;
        this.y = y;
        this.index = 0.3;
        this.speed = 4.;
        this.backgroudX = 0;

        this._frames = frames;
        this._frameIdx = 0;
        this._spriteSheet = spiteSheet;
        this._pipeDrawEngine = pipeDrawEngine;
        this._game = game;
        this.pipe = true
    }

    draw() {
        this.update();
        
        this._pipeDrawEngine.drawImage({
            spriteSheet: this._spriteSheet,
            pipeUp: this._frames[0],
            pipeDown: this._frames[1],
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            backgroudX: this.backgroudX,
            upPipe:this.upPipe,
            downPipe:this.downPipe,
        });
    }

    update() {
        if(this.pipe){
            this.upPipe =  Math.floor(Math.random() * (-50 - (-200)) + (-200))
            this.downPipe = (this._game._config.bird.height * 5) + (this._game._canvas.width - (-this.upPipe))
            console.log(this.upPipe, this.downPipe)
        }
        this.index += 0.3;
        this.backgroudX = -((this.index * this.speed) %(this._game._canvas.width + 50)
        );
        this.pipe = false
        if (this.backgroudX < -336) {
            this.pipe = true
        }
    }

    heightPipe(){
        this.upPipe =  Math.floor(Math.random() * (-50 - (-200)) + (-200))
        this.downPipe = (this._game._config.bird.height * 5) + (this._game._canvas.width - (-this.upPipe))
    }







    // drawTwoPipe() {
    //     this._pipeDrawEngine.drawImageTwo({
    //         spriteSheet: this._spriteSheet,
    //         pipeUp: this._frames[0],
    //         pipeDown: this._frames[1],
    //         x: this.x,
    //         y: this.y,
    //         width: this.width,
    //         height: this.height,
    //         xx: (this.backgroudX + 200),
    //     });
    // }
}
