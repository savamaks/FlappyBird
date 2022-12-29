class GameOver {
    constructor({
        x,
        y,
        frames,
        tableScore,
        tableScoreNumber,
        restart,
        spiteSheet,
        drawEngine,
        game,
    }) {
        this._x = x;
        this._y = y;

        this._frames = frames;
        this._tableScore = tableScore;
        this._tableScoreNumber = tableScoreNumber;
        this._restart = restart
        this._frameIdx = 0;

        this._spriteSheet = spiteSheet;
        this._drawEngine = drawEngine;
        this._game = game;
    }
    draw() {
        this._drawEngine.drawImage({
            x: this._x,
            y: this._y,
            spriteSheet: this._spriteSheet,
            image: this._frames[0],
            width: this._frames[0].width,
            height: this._frames[0].height,
        });

        this._drawEngine.drawImage({
            x: 30,
            y: 150,
            spriteSheet: this._spriteSheet,
            image: this._tableScore[0],
            width: this._tableScore[0].width,
            height: this._tableScore[0].height,
        });

        this._drawEngine.drawImage({
            x:this._restart.x,
            y:this._restart.y,
            spriteSheet: this._spriteSheet,
            image: this._restart.frames[0],
            width: this._restart.frames[0].width,
            height: this._restart.frames[0].height,
        });
      
    }
    restart() {
        this._game.prelaunch()   
    }

    restartButton(e){
        document.addEventListener('mousedown', (e)=>{

            // 360 382
            if(e.pageX > 360 && e.pageX < 462  && e.pageY > 380 && e.pageY < 438 ){
            console.log(e.pageX, e.pageY)
            }
        })
    }
}
