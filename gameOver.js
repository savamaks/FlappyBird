class GameOver {
    constructor({
        x,
        y,
        frames,
        tableScore,
        tableScoreNumber,
        spiteSheet,
        drawEngine,
        game,
    }) {
        this._x = x;
        this._y = y;

        this._frames = frames;
        this._tableScore = tableScore;
        this._tableScoreNumber = tableScoreNumber;

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
      
    }

    drawScore() {
        // console.log(this._drawEngine);
        
    }
}
