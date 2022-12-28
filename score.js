class ScoreTable {
    constructor({ x, y, numbers, spiteSheet, drawEngine, game }) {
        this._x = x;
        this._y = y;

        this._numbers = numbers;
        this._frameIdx = 0;
        this._score = 0;
        this._spriteSheet = spiteSheet;
        this._drawEngine = drawEngine;
        this._game = game;
    }
    draw() {
        //отрисовка верхнего числа
        this._drawEngine.drawImage({
            spriteSheet: this._spriteSheet,
            image: this._numbers[this._score],
            x: this._x,
            y: this._y,
            width: this._numbers[this._score].width,
            height: this._numbers[this._score].height,
        });
        if (this._score > 90) {
            this._drawEngine.drawImage({
                spriteSheet: this._spriteSheet,
                image: this._numbers[this._score],
                x: 157,
                y: this._y,
                width: this._numbers[this._score].width,
                height: this._numbers[this._score].height,
            });
        }
    }
    localMemory(score) {
        this._score = score;
        if (this._score > localStorage.getItem("score")) {
            localStorage.setItem("score", this._score);
        }

        
    }

    update() {
        this._number = ("" + this._score).split("");
    }

    drawScoreGameOver() {
        if (localStorage.getItem("score") === null) {
            this.bestScore = this._score;
        } else {
            this.bestScore = localStorage.getItem("score");
        }

        // отрисовка чисел в таблице
        this._drawEngine.drawImage({
            x: 210,
            y: 187,
            spriteSheet: this._spriteSheet,
            image: this._numbers[this._score],
            width: 12,
            height: 18,
        });
        this._drawEngine.drawImage({
            x: 210,
            y: 230,
            spriteSheet: this._spriteSheet,
            image: this._numbers[this.bestScore],
            width: 12,
            height: 18,
        });
    }
}
