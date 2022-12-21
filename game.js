class Game {
    constructor() {
        this._config = new Config();
        this._playing = false;
        this._canvas = document.getElementById("canvas");
        this._ctx = this._canvas.getContext("2d");
        this._canvas.width = this._config.canvas.width;
        this._canvas.height = this._config.canvas.height;
        this._spriteSheet;
        this._resourceLoader = new ResourceLoader();
        this._drawEngine = new CanvasDrawEngine({ canvas: this._canvas });
        this._pipeDrawEngine = new PipeDrawEngine({ canvas: this._canvas });
        this._birdDrawEngine = new BirdDrawEngine({ canvas: this._canvas });

        // this._inputHandler = new MouseInputHandler({
        //     left: ({ x, y }) => {
        //         console.log('ok')
        //     },
        // });
    }

    async prepare() {
        this._spriteSheet = await this._resourceLoader.load({
            type: RESOURCE_TYPE.IMAGE,
            width: this._config.spritesheet.width,
            height: this._config.spritesheet.height,
            src: this._config.spritesheet.src,
        });
    }

    reset() {
        this._score = 0;
        this._backgroud = new Background({
            x: this._config.canvas.x,
            y: this._config.canvas.y,
            width: this._config.canvas.width,
            height: this._config.canvas.height,
            spiteSheet: this._spriteSheet,
            drawEngine: this._drawEngine,
            game: this,
        });
        this._pipes = new Pipes({
            x: this._config.pipes.x,
            y: this._config.pipes.y,
            frames: this._config.pipes.frames,
            spiteSheet: this._spriteSheet,
            pipeDrawEngine: this._pipeDrawEngine,
            game: this,
        })

        this._bird = new Bird({
            x: this._config.bird.x,
            y: this._config.bird.y,
            width: this._config.bird.width,
            height: this._config.bird.height,
            frames: this._config.bird.frames,
            spiteSheet: this._spriteSheet,
            birdDrawEngine: this._birdDrawEngine,
            game: this,
            gravity: this._config.gravity,
            flapSpeed: this._config.bird.flapSpeed,
        });
    }

    update(delta) {
        this._bird.updateWings(delta);

        this._bird.update(delta);
    }

    draw() {
        this._backgroud.draw();
        this._pipes.draw();

        this._bird.draw();

    }
    _loop() {
        const now = Date.now();
        const delta = now - this._lastUpdate;
        this.update(delta / 185.0);
        this.button(delta / 185.0);

        if (this._playing) {
            this._drawEngine.clear();
            this.draw();

            this._lastUpdate = now;
            requestAnimationFrame(this._loop.bind(this));
        }
    }

    async start() {
        await this.prepare();
        this._playing = true;
        this._lastUpdate = Date.now();
        this.reset();
        this._loop();

    }

    button(delta) {
        document.addEventListener("click", () => {
            this._bird.flap(delta);
        });
    }
    gameOver() {
        this._playing = false;
        console.log(`Game Over ${this._score}`);
    }
}

let game = new Game();

game.start();

// class Game {
//     constructor() {
//         this.__config = new _Config();
//         this._resourceLoader = new ResourceLoader();
//         this._canvasDrawEngine = new CanvasDrawEngine(this.__config);
//     }

//     async prepare() {
//         this._spriteSheet = await this._resourceLoader.load({
//             type: RESOURCE_TYPE.IMAGE,
//             width: this.__config.spritesheet.width,
//             height: this.__config.spritesheet.height,
//             src: this.__config.spritesheet.src,
//         });
//         this.draw(this._spriteSheet)
//     }

//     draw(spriteSheet){
//         this._canvasDrawEngine.draw(spriteSheet);
//         window.requestAnimationFrame(this.draw.bind(this));

//     }
// }

// const game = new Game();

// game.prepare();
